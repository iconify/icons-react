import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x09loybdy.css';
import '../../css/o/o3o_tvbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x09loybdy"/><path class="o3o_tvbax"/></g>`,
		"fallback": "solar:magnifer-broken",
	});
}

export default Component;
