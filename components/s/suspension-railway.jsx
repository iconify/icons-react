import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwpw8pmwr.css';
import '../../css/a/a0dra1bav.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pwpw8pmwr"/><path class="a0dra1bav"/></g>`,
		"fallback": "fluent-emoji-high-contrast:suspension-railway",
	});
}

export default Component;
