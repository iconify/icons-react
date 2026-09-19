import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4dv_dq0a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4dv_dq0a"/>`,
		"fallback": "fluent-emoji-high-contrast:red-triangle-pointed-down",
	});
}

export default Component;
