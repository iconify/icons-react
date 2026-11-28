import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/j/j-vfmlbqv.css';
import '../../css/y/y8_rbdbkf.css';
import '../../css/d/dlpf1aclt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e77ebfb5e"/><path class="j-vfmlbqv"/><path class="y8_rbdbkf"/><path class="dlpf1aclt"/></g>`,
		"fallback": "iconaut:square-list-filter",
	});
}

export default Component;
