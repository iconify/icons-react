import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hq7-kg1-l.css';
import '../../css/v/vr39ulzpl.css';
import '../../css/d/d970nk8em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hq7-kg1-l"/><path class="vr39ulzpl"/><path class="d970nk8em"/></g>`,
		"fallback": "solar:pills-linear",
	});
}

export default Component;
