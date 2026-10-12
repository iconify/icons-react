import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnplm0yxo.css';
import '../../css/k/k9xvpcw_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 2 21.14)" class="pnplm0yxo"/><path class="k9xvpcw_z"/></g>`,
		"fallback": "andrsrxn:like",
	});
}

export default Component;
