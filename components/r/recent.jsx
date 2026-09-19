import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8u1htcmt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8u1htcmt"/>`,
		"fallback": "fluent-mdl2:recent",
	});
}

export default Component;
