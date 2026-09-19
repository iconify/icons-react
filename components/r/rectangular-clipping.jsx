import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmjcyj3vp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmjcyj3vp"/>`,
		"fallback": "fluent-mdl2:rectangular-clipping",
	});
}

export default Component;
