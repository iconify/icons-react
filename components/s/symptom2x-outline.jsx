import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5lcbacqs.css';
import '../../css/l/l13bblbqf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r5lcbacqs"/><path class="l13bblbqf"/></g>`,
		"fallback": "healthicons:symptom2x-outline",
	});
}

export default Component;
