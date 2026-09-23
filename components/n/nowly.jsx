import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy0-wxbjy.css';
import '../../css/n/n3_4b3b1z.css';
import '../../css/l/l2_1s-n1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="fy0-wxbjy"><path class="n3_4b3b1z"/><path class="l2_1s-n1o"/></g>`,
		"fallback": "thesvg-color:nowly",
	});
}

export default Component;
