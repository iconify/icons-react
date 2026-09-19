import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vygnzo2pp.css';
import '../../css/i/ibfbl8b6r.css';
import '../../css/g/g3t9fpbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vygnzo2pp"/><path class="ibfbl8b6r"/><path class="g3t9fpbhm"/></g>`,
		"fallback": "hugeicons:uv-03",
	});
}

export default Component;
