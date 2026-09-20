import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/foq9dgb3g.css';
import '../../css/f/f_vhw3oim.css';
import '../../css/g/gldq444bd.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGXv8lpc2Y)"><path class="foq9dgb3g"/><path class="f_vhw3oim"/><path class="gldq444bd"/></g><defs><clipPath id="SVGXv8lpc2Y"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "streamline-ultimate-color:maps",
	});
}

export default Component;
