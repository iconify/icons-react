import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8pdp68ro.css';
import '../../css/t/t-wcwabfz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8pdp68ro"/><path class="t-wcwabfz"/>`,
		"fallback": "carbon:scalpel-lasso",
	});
}

export default Component;
