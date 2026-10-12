import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rogglqbhr.css';
import '../../css/e/e3ahb7b0n.css';
import '../../css/k/k1hyvpwyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rogglqbhr"/><rect transform="matrix(-1 0 0 1 14.9 2.76)" class="e3ahb7b0n"/><path class="k1hyvpwyk"/></g>`,
		"fallback": "andrsrxn:table-columns-measure",
	});
}

export default Component;
