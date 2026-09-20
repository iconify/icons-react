import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d844z0t9x.css';
import '../../css/r/rlmjigbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d844z0t9x"/><path class="rlmjigbjv"/></g>`,
		"fallback": "solar:rugby-broken",
	});
}

export default Component;
