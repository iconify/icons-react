import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/coxbh9imx.css';
import '../../css/r/roa-onbpk.css';
import '../../css/f/fmwlcyxxn.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGXv8lpc2Y)"><path class="coxbh9imx"/><path class="roa-onbpk"/><path class="fmwlcyxxn"/></g><defs><clipPath id="SVGXv8lpc2Y"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "streamline-ultimate-color:pathfinder-exclude",
	});
}

export default Component;
