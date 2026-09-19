import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc-ok1ayh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc-ok1ayh"/>`,
		"fallback": "fa7-brands:pixelfed",
	});
}

export default Component;
