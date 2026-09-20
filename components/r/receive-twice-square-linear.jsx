import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/slo5fwl1o.css';
import '../../css/y/yf7lmww2l.css';
import '../../css/b/b0dehhbti.css';
import '../../css/p/pw8f5c0fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="slo5fwl1o"/><path class="yf7lmww2l"/><path class="b0dehhbti"/><path class="pw8f5c0fp"/></g>`,
		"fallback": "solar:receive-twice-square-linear",
	});
}

export default Component;
