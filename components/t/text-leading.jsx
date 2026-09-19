import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5m82iwwz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5m82iwwz"/>`,
		"fallback": "carbon:text-leading",
	});
}

export default Component;
