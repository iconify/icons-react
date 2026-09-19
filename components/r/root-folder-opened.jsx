import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jlijy7b6j.css';
import '../../css/p/pqys9m2th.css';
import '../../css/m/mfynv6ahr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jlijy7b6j"/><path class="pqys9m2th"/><path clip-rule="evenodd" class="mfynv6ahr"/></g>`,
		"fallback": "codicon:root-folder-opened",
	});
}

export default Component;
