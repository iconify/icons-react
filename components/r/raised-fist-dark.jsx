import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eiurz03au.css';
import '../../css/l/l2nfu9bxz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eiurz03au"/><path class="l2nfu9bxz"/></g>`,
		"fallback": "fluent-emoji-flat:raised-fist-dark",
	});
}

export default Component;
