import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyp6htmmb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyp6htmmb"/>`,
		"fallback": "fluent-emoji-high-contrast:red-square",
	});
}

export default Component;
