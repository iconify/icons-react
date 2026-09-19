import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7965ybwu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7965ybwu"/>`,
		"fallback": "carbon:user-follow",
	});
}

export default Component;
