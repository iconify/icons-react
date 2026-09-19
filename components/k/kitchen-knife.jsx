import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d__xjebgu.css';
import '../../css/k/k0q1dxb2e.css';
import '../../css/o/oze5v2bxa.css';
import '../../css/w/whva_pu8o.css';
import '../../css/i/ig4__6bfv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d__xjebgu"/><path class="k0q1dxb2e"/><path class="oze5v2bxa"/><path class="whva_pu8o"/><path class="ig4__6bfv"/></g>`,
		"fallback": "fluent-emoji-flat:kitchen-knife",
	});
}

export default Component;
