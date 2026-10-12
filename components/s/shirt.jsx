import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja2x0lp8m.css';
import '../../css/c/c6maefb_k.css';
import '../../css/r/ra0kfdc2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ja2x0lp8m"/><path class="c6maefb_k"/><path class="ra0kfdc2p"/></g>`,
		"fallback": "andrsrxn:shirt",
	});
}

export default Component;
