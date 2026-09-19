import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0vm0pw9t.css';
import '../../css/x/x42_8jb4z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q0vm0pw9t"/><path class="x42_8jb4z"/></g>`,
		"fallback": "bi:phone-landscape",
	});
}

export default Component;
