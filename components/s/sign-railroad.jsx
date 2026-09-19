import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q9ielab0e.css';
import '../../css/r/rruv79bki.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q9ielab0e"/><path class="rruv79bki"/></g>`,
		"fallback": "bi:sign-railroad",
	});
}

export default Component;
