import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwpa49bnm.css';
import '../../css/e/e5a_6qq4j.css';
import '../../css/z/z9tsv8iiv.css';
import '../../css/w/w5q76cb0c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkRV7fe4m" maskUnits="userSpaceOnUse"><path class="mwpa49bnm"/></mask></defs><path class="e5a_6qq4j"/><path clip-rule="evenodd" mask="url(#SVGkRV7fe4m)" transform="translate(4.027)scale(2.1192)" class="z9tsv8iiv"/><path class="w5q76cb0c"/>`,
		"fallback": "devicon:primeng",
	});
}

export default Component;
