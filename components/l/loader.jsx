import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qa-0fibzt.css';
import '../../css/e/ey65q7bnk.css';
import '../../css/k/k1p42wb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qa-0fibzt wm-k"/><path class="ey65q7bnk wm-a"/><path class="k1p42wb5t wm-deco"/></g>`,
		"fallback": "withicons-kawaii:loader",
	});
}

export default Component;
