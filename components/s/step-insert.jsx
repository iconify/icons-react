import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0b8l-bqb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0b8l-bqb"/>`,
		"fallback": "fluent-mdl2:step-insert",
	});
}

export default Component;
