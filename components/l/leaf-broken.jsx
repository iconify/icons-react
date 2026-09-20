import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sxlu52s9l.css';
import '../../css/n/n_jf2cc7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sxlu52s9l"/><path class="n_jf2cc7x"/></g>`,
		"fallback": "solar:leaf-broken",
	});
}

export default Component;
