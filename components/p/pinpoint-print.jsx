import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uzrocibyu.css';
import '../../css/c/c6am73bhf.css';
import '../../css/g/g42dkccnc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uzrocibyu"/><path clip-rule="evenodd" class="c6am73bhf"/><path clip-rule="evenodd" class="g42dkccnc"/></g>`,
		"fallback": "pepicons:pinpoint-print",
	});
}

export default Component;
