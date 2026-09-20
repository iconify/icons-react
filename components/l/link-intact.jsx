import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx1m91mzz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx1m91mzz"/>`,
		"fallback": "oi:link-intact",
	});
}

export default Component;
