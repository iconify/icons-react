import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y9lk8-blp.css';
import '../../css/k/krpz13i1y.css';
import '../../css/u/uvaq53bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y9lk8-blp"/><path class="krpz13i1y"/><path class="uvaq53bno"/></g>`,
		"fallback": "hugeicons:shared-wifi",
	});
}

export default Component;
