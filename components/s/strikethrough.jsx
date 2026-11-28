import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tltjt5b_s.css';
import '../../css/o/o6kj8tx6m.css';
import '../../css/h/hm0ch0kmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tltjt5b_s"/><path class="o6kj8tx6m"/><path class="hm0ch0kmd"/></g>`,
		"fallback": "iconaut:strikethrough",
	});
}

export default Component;
