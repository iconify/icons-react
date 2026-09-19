import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j3esolbnv.css';
import '../../css/e/e3ev4sbml.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j3esolbnv"/><path class="e3ev4sbml"/></g>`,
		"fallback": "bi:journals",
	});
}

export default Component;
