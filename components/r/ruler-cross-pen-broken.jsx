import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sk9h6n2vj.css';
import '../../css/i/inis8tb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sk9h6n2vj"/><path class="inis8tb9m"/></g>`,
		"fallback": "solar:ruler-cross-pen-broken",
	});
}

export default Component;
