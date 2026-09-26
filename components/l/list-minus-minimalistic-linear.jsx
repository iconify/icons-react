import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jv514ss1m.css';
import '../../css/r/r5wb7_bnz.css';
import '../../css/f/f8edcu39k.css';
import '../../css/g/glpogpcqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jv514ss1m"/><path class="r5wb7_bnz"/><path class="f8edcu39k"/><path class="glpogpcqk"/></g>`,
		"fallback": "solar:list-minus-minimalistic-linear",
	});
}

export default Component;
