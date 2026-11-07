import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/osuf_jq5d.css';
import '../../css/e/e85a4hbua.css';
import '../../css/q/q91-j3b0a.css';
import '../../css/q/q1cgl7rzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="osuf_jq5d"/><path class="e85a4hbua"/><path class="q91-j3b0a"/><path class="q1cgl7rzl"/></g>`,
		"fallback": "solar:mirror-broken",
	});
}

export default Component;
