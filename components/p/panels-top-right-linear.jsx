import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l-59yebqq.css';
import '../../css/g/g626xxb-k.css';
import '../../css/d/dn272vvpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l-59yebqq"/><path class="g626xxb-k"/><path class="dn272vvpc"/></g>`,
		"fallback": "solar:panels-top-right-linear",
	});
}

export default Component;
