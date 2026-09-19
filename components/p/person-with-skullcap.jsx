import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yf9vpvbuw.css';
import '../../css/j/jnkns5b5u.css';
import '../../css/f/fh32d1b6b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yf9vpvbuw"/><path class="jnkns5b5u"/><path class="fh32d1b6b"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-with-skullcap",
	});
}

export default Component;
