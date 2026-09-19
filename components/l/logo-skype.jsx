import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5aom4pxb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5aom4pxb"/>`,
		"fallback": "carbon:logo-skype",
	});
}

export default Component;
