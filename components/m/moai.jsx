import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0c3afbfu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0c3afbfu"/>`,
		"fallback": "fluent-emoji-high-contrast:moai",
	});
}

export default Component;
