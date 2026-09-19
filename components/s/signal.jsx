import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hg0768bba.css';
import '../../css/q/q9y26w24q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hg0768bba"/><path class="q9y26w24q"/></g>`,
		"fallback": "at-icons:signal",
	});
}

export default Component;
