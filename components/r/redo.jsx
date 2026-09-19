import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_q0zpzrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_q0zpzrq"/>`,
		"fallback": "circum:redo",
	});
}

export default Component;
