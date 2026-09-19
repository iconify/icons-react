import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xzxpnib2u.css';
import '../../css/w/wmhvhjlfj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xzxpnib2u"/><path class="wmhvhjlfj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:radioactive",
	});
}

export default Component;
