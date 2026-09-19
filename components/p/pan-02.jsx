import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xrl_5-b0c.css';
import '../../css/b/b_10b0_-a.css';
import '../../css/q/qn8_xfbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xrl_5-b0c"/><path class="b_10b0_-a"/><path class="qn8_xfbjc"/></g>`,
		"fallback": "hugeicons:pan-02",
	});
}

export default Component;
