import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/us59zbc6y.css';
import '../../css/i/icn5nobxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="us59zbc6y"/><path class="icn5nobxp"/></g>`,
		"fallback": "cryptocurrency-color:nxt",
	});
}

export default Component;
