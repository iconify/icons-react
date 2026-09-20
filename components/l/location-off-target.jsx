import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4uf44bbs.css';
import '../../css/z/zr_16zb0b.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGXv8lpc2Y)"><path class="t4uf44bbs"/><path class="zr_16zb0b"/></g><defs><clipPath id="SVGXv8lpc2Y"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "streamline-ultimate-color:location-off-target",
	});
}

export default Component;
