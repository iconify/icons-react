import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akp-j5wvb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akp-j5wvb"/>`,
		"fallback": "streamline-flex:multiple-stars",
	});
}

export default Component;
