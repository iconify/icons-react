import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_iq0dnaq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_iq0dnaq"/>`,
		"fallback": "fluent-emoji-high-contrast:soccer-ball",
	});
}

export default Component;
