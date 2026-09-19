import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2wk0t81h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2wk0t81h"/>`,
		"fallback": "fluent-mdl2:offline-storage",
	});
}

export default Component;
