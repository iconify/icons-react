import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u50chrd7i.css';
import '../../css/u/u-5ljab_d.css';
import '../../css/u/uk5v5mblj.css';
import '../../css/i/iwkdp9bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u50chrd7i"/><path class="u-5ljab_d"/><path class="uk5v5mblj"/><path class="iwkdp9bgv"/></g>`,
		"fallback": "iconaut:three-fingers",
	});
}

export default Component;
