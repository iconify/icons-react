import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jxxa3wbaj.css';
import '../../css/h/hq968pb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jxxa3wbaj"/><path class="hq968pb5a"/></g>`,
		"fallback": "solar:oven-mitts-minimalistic-broken",
	});
}

export default Component;
