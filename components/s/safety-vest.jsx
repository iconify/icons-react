import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv455vb8z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv455vb8z"/>`,
		"fallback": "fluent-emoji-high-contrast:safety-vest",
	});
}

export default Component;
