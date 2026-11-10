import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v2mn68bee.css';
import '../../css/k/kh4j69bsg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v2mn68bee"/><path class="kh4j69bsg"/></g>`,
		"fallback": "at-icons:person-fall",
	});
}

export default Component;
