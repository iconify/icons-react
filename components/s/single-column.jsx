import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i15au7b7b.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i15au7b7b"/>`,
		"fallback": "fluent-mdl2:single-column",
	});
}

export default Component;
