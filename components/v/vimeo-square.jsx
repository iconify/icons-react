import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdt0mx1ju.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdt0mx1ju"/>`,
		"fallback": "fa7-brands:vimeo-square",
	});
}

export default Component;
