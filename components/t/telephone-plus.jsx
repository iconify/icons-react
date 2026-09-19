import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0dntab6u.css';
import '../../css/k/kogfyqbby.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d0dntab6u"/><path class="kogfyqbby"/></g>`,
		"fallback": "bi:telephone-plus",
	});
}

export default Component;
