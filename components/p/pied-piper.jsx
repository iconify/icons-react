import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0lj0milb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0lj0milb"/>`,
		"fallback": "fa7-brands:pied-piper",
	});
}

export default Component;
