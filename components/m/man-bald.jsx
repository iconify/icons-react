import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz5lxvb8w.css';
import '../../css/n/nqbv9qbck.css';
import '../../css/u/u0fo4obit.css';
import '../../css/r/rh3nsbc2t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jz5lxvb8w"/><path class="nqbv9qbck"/><path class="u0fo4obit"/><path class="rh3nsbc2t"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-bald",
	});
}

export default Component;
