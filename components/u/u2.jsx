import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a21g7ybtt.css';
import '../../css/a/ap1fb8_to.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a21g7ybtt"/><path class="ap1fb8_to"/>`,
		"fallback": "carbon:u2",
	});
}

export default Component;
