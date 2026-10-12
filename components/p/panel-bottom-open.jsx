import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7wcc782q.css';
import '../../css/k/kwjlcqbyz.css';
import '../../css/r/rbd5iccre.css';
import '../../css/r/r3mewl4tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q7wcc782q"/><rect transform="rotate(90 21.23 14.65)" class="kwjlcqbyz"/><rect transform="rotate(90 21.23 2.74)" class="rbd5iccre"/><path class="r3mewl4tv"/></g>`,
		"fallback": "andrsrxn:panel-bottom-open",
	});
}

export default Component;
