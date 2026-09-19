import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfi9oobug.css';
import '../../css/b/b_wglmqab.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfi9oobug"/><path class="b_wglmqab"/>`,
		"fallback": "cil:lemon",
	});
}

export default Component;
