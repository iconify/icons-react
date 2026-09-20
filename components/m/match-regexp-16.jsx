import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf-bn_bkf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf-bn_bkf"/>`,
		"fallback": "qlementine-icons:match-regexp-16",
	});
}

export default Component;
