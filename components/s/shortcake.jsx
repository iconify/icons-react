import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/af2q3gi7j.css';
import '../../css/j/jq5_liapr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="af2q3gi7j"/><path class="jq5_liapr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:shortcake",
	});
}

export default Component;
