import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0bxq3day.css';
import '../../css/e/e3t8n_b1o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0bxq3day"/><path class="e3t8n_b1o"/>`,
		"fallback": "carbon:number-0",
	});
}

export default Component;
