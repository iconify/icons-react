import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kmmfarjhc.css';
import '../../css/b/bl7yvn2-e.css';
import '../../css/v/vpo7fxqls.css';
import '../../css/a/aarbjq8mj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kmmfarjhc"/><path class="bl7yvn2-e"/><path class="vpo7fxqls"/><path class="aarbjq8mj"/></g>`,
		"fallback": "hugeicons:keyframes-multiple-add",
	});
}

export default Component;
