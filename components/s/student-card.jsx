import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t2zg64gut.css';
import '../../css/q/qucp4gbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t2zg64gut"/><path class="qucp4gbkc"/></g>`,
		"fallback": "hugeicons:student-card",
	});
}

export default Component;
