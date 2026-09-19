import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8b5cke4w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8b5cke4w"/>`,
		"fallback": "carbon:text-indent-less",
	});
}

export default Component;
