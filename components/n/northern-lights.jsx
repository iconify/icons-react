import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kok2lcctq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kok2lcctq"/>`,
		"fallback": "mdi:northern-lights",
	});
}

export default Component;
