import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpu53juwa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpu53juwa"/>`,
		"fallback": "bi:justify-left",
	});
}

export default Component;
