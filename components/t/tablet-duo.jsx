import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7up-acjy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/te-6n-baq.css';
import '../../css/z/zb9fuvb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary v7up-acjy"/><g class="dt0cm9dhy primary"><path class="te-6n-baq"/><path class="zb9fuvb8c"/></g>`,
		"fallback": "iconaut:tablet-duo",
	});
}

export default Component;
