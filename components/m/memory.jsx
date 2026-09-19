import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bacfu3bgr.css';
import '../../css/z/zhfv58bgw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bacfu3bgr"/><path class="zhfv58bgw"/>`,
		"fallback": "cil:memory",
	});
}

export default Component;
