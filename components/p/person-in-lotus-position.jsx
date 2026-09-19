import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x0q5tlb3j.css';
import '../../css/w/wvkhhwb5u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x0q5tlb3j"/><path class="wvkhhwb5u"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-in-lotus-position",
	});
}

export default Component;
