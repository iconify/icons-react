import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdnhdf9mj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdnhdf9mj"/>`,
		"fallback": "carbon:triangle-down-outline",
	});
}

export default Component;
