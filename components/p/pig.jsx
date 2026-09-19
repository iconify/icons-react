import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nhf7c9bdb.css';
import '../../css/i/io09o0byr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nhf7c9bdb"/><path class="io09o0byr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pig",
	});
}

export default Component;
