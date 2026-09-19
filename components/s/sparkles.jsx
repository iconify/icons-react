import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir_1hvbbr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir_1hvbbr"/>`,
		"fallback": "fluent-emoji-flat:sparkles",
	});
}

export default Component;
