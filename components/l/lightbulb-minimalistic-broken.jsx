import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v_zz46bgb.css';
import '../../css/r/r52yrxd6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v_zz46bgb"/><path class="r52yrxd6w"/></g>`,
		"fallback": "solar:lightbulb-minimalistic-broken",
	});
}

export default Component;
