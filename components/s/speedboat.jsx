import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ffc86iciq.css';
import '../../css/g/gws62vi1t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ffc86iciq"/><path class="gws62vi1t"/></g>`,
		"fallback": "fluent-emoji-high-contrast:speedboat",
	});
}

export default Component;
