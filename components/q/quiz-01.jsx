import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f2ygn_kty.css';
import '../../css/f/f1t-63yfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f2ygn_kty"/><path class="f1t-63yfq"/></g>`,
		"fallback": "hugeicons:quiz-01",
	});
}

export default Component;
