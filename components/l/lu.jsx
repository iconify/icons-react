import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u24jj7bob.css';
import '../../css/c/ctlov-l8x.css';
import '../../css/l/lw2svwf7m.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u24jj7bob"/><path class="ctlov-l8x"/><path class="lw2svwf7m"/></g>`,
		"fallback": "cif:lu",
	});
}

export default Component;
