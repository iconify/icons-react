import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-9spq4rx.css';
import '../../css/r/r_d9eersx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a-9spq4rx"/><path class="r_d9eersx"/></g>`,
		"fallback": "at-icons:pickaxe",
	});
}

export default Component;
