import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6v_4mx_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6v_4mx_i"/>`,
		"fallback": "fluent-emoji-high-contrast:tomato",
	});
}

export default Component;
