import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dash5mbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dash5mbrn"/>`,
		"fallback": "mingcute:pingpong-line",
	});
}

export default Component;
