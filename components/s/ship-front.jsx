import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohtcu9b3e.css';
import '../../css/v/v9228obrk.css';
import '../../css/e/etljexbih.css';
import '../../css/h/h45-knbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ohtcu9b3e"/><path class="v9228obrk"/><path class="etljexbih"/><path class="h45-knbax"/></g>`,
		"fallback": "andrsrxn:ship-front",
	});
}

export default Component;
