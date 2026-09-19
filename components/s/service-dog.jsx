import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejm7p2bqe.css';
import '../../css/a/awdkswbwz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ejm7p2bqe"/><path class="awdkswbwz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:service-dog",
	});
}

export default Component;
