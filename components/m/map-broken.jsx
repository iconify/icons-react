import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hj0xdxema.css';
import '../../css/h/hco13obdp.css';
import '../../css/h/h4fzukbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hj0xdxema"/><path class="hco13obdp"/><path class="h4fzukbso"/></g>`,
		"fallback": "solar:map-broken",
	});
}

export default Component;
