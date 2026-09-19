import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crncvzb-e.css';
import '../../css/t/tn0_q5b3t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crncvzb-e"/><circle class="tn0_q5b3t"/>`,
		"fallback": "carbon:notification-counter",
	});
}

export default Component;
