import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr12701qk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr12701qk"/>`,
		"fallback": "fluent-emoji-high-contrast:pile-of-poo",
	});
}

export default Component;
