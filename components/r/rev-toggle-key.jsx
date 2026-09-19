import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyo3w6x8q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyo3w6x8q"/>`,
		"fallback": "fluent-mdl2:rev-toggle-key",
	});
}

export default Component;
