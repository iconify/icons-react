import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/ww941joxp.css';
import '../../css/b/bj_b4ehoh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ww941joxp"/><path class="bj_b4ehoh"/></g>`,
		"fallback": "cryptocurrency-color:pivx",
	});
}

export default Component;
