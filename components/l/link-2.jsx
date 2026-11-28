import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zo9q0obuy.css';
import '../../css/t/tfm-ntb4w.css';
import '../../css/u/u-w8q3b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zo9q0obuy"/><path class="tfm-ntb4w"/><path class="u-w8q3b3b"/></g>`,
		"fallback": "iconaut:link-2",
	});
}

export default Component;
