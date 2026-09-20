import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snhu8cb0b.css';
import '../../css/f/fl1m1_byd.css';
import '../../css/d/d1irgtdpd.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGXv8lpc2Y)"><path class="snhu8cb0b"/><path class="fl1m1_byd"/><path class="d1irgtdpd"/></g><defs><clipPath id="SVGXv8lpc2Y"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "streamline-ultimate-color:vectors-anchor-rectangle",
	});
}

export default Component;
