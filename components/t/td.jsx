import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5-xrfb7g.css';
import '../../css/d/dgt2p61ky.css';
import '../../css/z/z3myrqbds.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n5-xrfb7g"/><path class="dgt2p61ky"/><path class="z3myrqbds"/></g>`,
		"fallback": "cif:td",
	});
}

export default Component;
