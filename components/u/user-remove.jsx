import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/r/rtktb5b_a.css';
import '../../css/k/kzhs7u93y.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="rtktb5b_a"/><path class="kzhs7u93y"/></g>`,
		"fallback": "system-uicons:user-remove",
	});
}

export default Component;
