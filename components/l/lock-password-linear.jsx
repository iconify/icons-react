import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mgx0gjb2o.css';
import '../../css/x/xax-53bab.css';
import '../../css/e/eyig6k37j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mgx0gjb2o"/><path class="xax-53bab"/><path class="eyig6k37j"/><path class="eyig6k37j"/></g>`,
		"fallback": "solar:lock-password-linear",
	});
}

export default Component;
