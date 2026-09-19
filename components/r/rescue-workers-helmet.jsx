import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_qonyqlp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_qonyqlp"/>`,
		"fallback": "fluent-emoji-high-contrast:rescue-workers-helmet",
	});
}

export default Component;
