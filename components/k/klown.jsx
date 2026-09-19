import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kod7n39qq.css';
import '../../css/s/sh8kg65pu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kod7n39qq"/><path class="sh8kg65pu"/>`,
		"fallback": "cryptocurrency:klown",
	});
}

export default Component;
