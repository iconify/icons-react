import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex2nu4occ.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex2nu4occ"/>`,
		"fallback": "fluent-mdl2:mini-link",
	});
}

export default Component;
