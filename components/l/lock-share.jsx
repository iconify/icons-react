import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d53h_wb6z.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d53h_wb6z"/>`,
		"fallback": "fluent-mdl2:lock-share",
	});
}

export default Component;
