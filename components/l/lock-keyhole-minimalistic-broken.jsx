import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d_tqh4qme.css';
import '../../css/u/uwdynnbji.css';
import '../../css/x/xnnhmccbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d_tqh4qme"/><path class="uwdynnbji"/><path class="xnnhmccbq"/></g>`,
		"fallback": "solar:lock-keyhole-minimalistic-broken",
	});
}

export default Component;
