import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e2_10oj2l.css';
import '../../css/d/df-j23bjo.css';
import '../../css/o/or3ztp_qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e2_10oj2l"/><path class="df-j23bjo"/><path class="or3ztp_qk"/></g>`,
		"fallback": "hugeicons:mail-remove-02",
	});
}

export default Component;
