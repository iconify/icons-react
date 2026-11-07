import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mgx0gjb2o.css';
import '../../css/c/ct1wj-9ig.css';
import '../../css/x/xwaud83au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mgx0gjb2o"/><path class="ct1wj-9ig"/><path class="xwaud83au"/></g>`,
		"fallback": "solar:lock-keyhole-minimalistic-line-duotone",
	});
}

export default Component;
