import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1enz4oyn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1enz4oyn"/>`,
		"fallback": "fluent-mdl2:primary-calendar",
	});
}

export default Component;
