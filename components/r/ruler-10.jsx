import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/umzh6pbaq.css';
import '../../css/w/wolk6_u5e.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="umzh6pbaq"/><path class="wolk6_u5e"/></g>`,
		"fallback": "marketeq:ruler-10",
	});
}

export default Component;
