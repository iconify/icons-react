import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh3i9mbcr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh3i9mbcr"/>`,
		"fallback": "fa7-solid:mask-ventilator",
	});
}

export default Component;
