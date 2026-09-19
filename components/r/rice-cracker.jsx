import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-erfgb3a.css';
import '../../css/g/ght0o1b9j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-erfgb3a"/><path class="ght0o1b9j"/></g>`,
		"fallback": "fluent-emoji-high-contrast:rice-cracker",
	});
}

export default Component;
