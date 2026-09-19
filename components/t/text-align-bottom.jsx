import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq5xwzb8i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq5xwzb8i"/>`,
		"fallback": "fluent-mdl2:text-align-bottom",
	});
}

export default Component;
