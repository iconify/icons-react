import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fd-b5hfyy.css';
import '../../css/d/dmgzojbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fd-b5hfyy"/><path class="dmgzojbvz"/></g>`,
		"fallback": "solar:pill-broken",
	});
}

export default Component;
