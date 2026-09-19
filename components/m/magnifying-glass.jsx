import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h__9ti67x.css';
import '../../css/h/hj92n7xau.css';
import '../../css/j/j6hcrujfg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h__9ti67x"/><path clip-rule="evenodd" class="hj92n7xau"/><path class="j6hcrujfg"/></g>`,
		"fallback": "healthicons:magnifying-glass",
	});
}

export default Component;
