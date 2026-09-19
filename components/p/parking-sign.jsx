import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ue_al4hoa.css';
import '../../css/u/u05je9dcy.css';
import '../../css/i/i8tckab1e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ue_al4hoa"/><path class="u05je9dcy"/><path class="i8tckab1e"/></g>`,
		"fallback": "at-icons:parking-sign",
	});
}

export default Component;
