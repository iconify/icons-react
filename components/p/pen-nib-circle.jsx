import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc7tncoag.css';
import '../../css/g/gwkmarbyu.css';
import '../../css/y/ymtmr1bse.css';
import '../../css/w/wwnm71-zg.css';
import '../../css/e/e173c5bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sc7tncoag"/><path class="gwkmarbyu"/><path class="ymtmr1bse"/><path class="wwnm71-zg"/><path class="e173c5bzr"/></g>`,
		"fallback": "andrsrxn:pen-nib-circle",
	});
}

export default Component;
