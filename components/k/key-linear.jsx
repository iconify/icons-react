import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dhjpo8dcm.css';
import '../../css/p/pk2k6gb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dhjpo8dcm"/><path class="pk2k6gb4d"/></g>`,
		"fallback": "solar:key-linear",
	});
}

export default Component;
