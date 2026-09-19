import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpfxbv8_o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpfxbv8_o"/>`,
		"fallback": "fa7-brands:jxl",
	});
}

export default Component;
