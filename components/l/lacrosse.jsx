import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioi6o8bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioi6o8bcg"/>`,
		"fallback": "mdi:lacrosse",
	});
}

export default Component;
