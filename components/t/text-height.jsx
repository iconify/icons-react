import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxebszz2b.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxebszz2b"/>`,
		"fallback": "fa6-solid:text-height",
	});
}

export default Component;
