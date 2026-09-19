import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8_pid-oz.css';
import '../../css/u/uyw5qnb2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8_pid-oz"/><path class="uyw5qnb2t"/>`,
		"fallback": "cil:italic",
	});
}

export default Component;
