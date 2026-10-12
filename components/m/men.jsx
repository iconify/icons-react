import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nukrxlptl.css';
import '../../css/k/k3z3r9fjz.css';
import '../../css/c/cbatx6b9w.css';
import '../../css/b/bmsc_bces.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="nukrxlptl"/><path class="k3z3r9fjz"/><circle class="cbatx6b9w"/><path class="bmsc_bces"/></g>`,
		"fallback": "andrsrxn:men",
	});
}

export default Component;
