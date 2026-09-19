import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-89v3b5b.css';
import '../../css/f/fjhdmsv1o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-89v3b5b"/><path class="fjhdmsv1o"/>`,
		"fallback": "carbon:tag-none",
	});
}

export default Component;
