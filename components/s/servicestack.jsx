import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxw-ycbms.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxw-ycbms"/>`,
		"fallback": "fa7-brands:servicestack",
	});
}

export default Component;
