import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4l9t7zly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4l9t7zly"/>`,
		"fallback": "mingcute:science-line",
	});
}

export default Component;
