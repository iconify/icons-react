import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jvzm0ac7t.css';
import '../../css/j/jfoq-1h6n.css';
import '../../css/u/u3tqh8b-y.css';
import '../../css/z/z3ylw7bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jvzm0ac7t"/><path class="jfoq-1h6n"/><path class="u3tqh8b-y"/><path class="z3ylw7bis"/></g>`,
		"fallback": "solar:quit-full-screen-line-duotone",
	});
}

export default Component;
