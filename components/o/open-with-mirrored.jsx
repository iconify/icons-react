import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khk__8bhl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khk__8bhl"/>`,
		"fallback": "fluent-mdl2:open-with-mirrored",
	});
}

export default Component;
