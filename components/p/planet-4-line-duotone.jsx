import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cclx108-u.css';
import '../../css/i/im_dd0b1k.css';
import '../../css/x/x0fuh28ql.css';
import '../../css/a/aqzx74o1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cclx108-u"/><path class="im_dd0b1k"/><path class="x0fuh28ql"/><path class="aqzx74o1j"/></g>`,
		"fallback": "solar:planet-4-line-duotone",
	});
}

export default Component;
