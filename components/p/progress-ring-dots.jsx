import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flrgu3b2d.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flrgu3b2d"/>`,
		"fallback": "fluent-mdl2:progress-ring-dots",
	});
}

export default Component;
