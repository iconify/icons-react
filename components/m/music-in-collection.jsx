import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htc1r9aqo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htc1r9aqo"/>`,
		"fallback": "fluent-mdl2:music-in-collection",
	});
}

export default Component;
