import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmui3eb3h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmui3eb3h"/>`,
		"fallback": "fluent-mdl2:unpublish-content",
	});
}

export default Component;
