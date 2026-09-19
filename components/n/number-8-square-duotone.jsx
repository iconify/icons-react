import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stv4069zv.css';
import '../../css/p/pwnohqbpo.css';
import '../../css/a/aoc0sfbxe.css';
import '../../css/g/guj4ctbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stv4069zv"/><path class="pwnohqbpo"/><circle class="aoc0sfbxe"/><circle class="guj4ctbxj"/></g>`,
		"fallback": "iconamoon:number-8-square-duotone",
	});
}

export default Component;
