import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/ve1i9wjpw.css';
import '../../css/u/uxz72gbpi.css';
import '../../css/f/fvhf7ybpe.css';
import '../../css/t/t7ag5wbbh.css';
import '../../css/o/oercy74sh.css';
import '../../css/l/lh6igabhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ve1i9wjpw"/><path class="uxz72gbpi"/><path class="fvhf7ybpe"/><path class="t7ag5wbbh"/><path class="oercy74sh"/><path class="lh6igabhb"/></g>`,
		"fallback": "iconaut:pig",
	});
}

export default Component;
