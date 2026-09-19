import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fyxsp7b5u.css';
import '../../css/a/a7_qq3b-x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fyxsp7b5u"/><path class="a7_qq3b-x"/></g>`,
		"fallback": "healthicons:virus-mutation2x-outline",
	});
}

export default Component;
