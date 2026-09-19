import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e03v5bc6t.css';
import '../../css/q/q9nl-gxlx.css';
import '../../css/p/psgm4limd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e03v5bc6t"/><path class="q9nl-gxlx"/><path class="psgm4limd"/></g>`,
		"fallback": "hugeicons:usb-connected-01",
	});
}

export default Component;
