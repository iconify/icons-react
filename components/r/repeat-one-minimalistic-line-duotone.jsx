import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-9qosbks.css';
import '../../css/y/ygwi57j2x.css';
import '../../css/e/e1y9aqblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j-9qosbks"/><path class="ygwi57j2x"/><path class="e1y9aqblm"/></g>`,
		"fallback": "solar:repeat-one-minimalistic-line-duotone",
	});
}

export default Component;
