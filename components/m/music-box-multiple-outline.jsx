import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iduxaeb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iduxaeb8q"/>`,
		"fallback": "mdi:music-box-multiple-outline",
	});
}

export default Component;
