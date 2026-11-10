import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jml-qac1x.css';
import '../../css/n/noyeknzwl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jml-qac1x"/><path class="noyeknzwl"/></g>`,
		"fallback": "at-icons:person-jump",
	});
}

export default Component;
