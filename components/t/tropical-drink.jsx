import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqh4d4_cy.css';
import '../../css/o/odhc4kx7e.css';
import '../../css/m/m-735vbez.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/w/w0ce1bcaz.css';
import '../../css/q/q3t0wdb-z.css';
import '../../css/h/hjncyxbft.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqh4d4_cy"/><path class="odhc4kx7e"/><path class="m-735vbez"/><g class="x8poo_bjf"><path class="w0ce1bcaz"/><path class="q3t0wdb-z"/><path class="hjncyxbft"/></g>`,
		"fallback": "openmoji:tropical-drink",
	});
}

export default Component;
