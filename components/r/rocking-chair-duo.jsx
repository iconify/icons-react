import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mxiihibxh.css';
import '../../css/u/u5egpobzl.css';
import '../../css/w/wmsjuibuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mxiihibxh"/><path class="u5egpobzl"/><path class="wmsjuibuj"/></g>`,
		"fallback": "iconaut:rocking-chair-duo",
	});
}

export default Component;
