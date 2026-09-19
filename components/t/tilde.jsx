import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz-hmbbxz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz-hmbbxz"/>`,
		"fallback": "carbon:tilde",
	});
}

export default Component;
