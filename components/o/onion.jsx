import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr-m91bho.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr-m91bho"/>`,
		"fallback": "fluent-emoji-high-contrast:onion",
	});
}

export default Component;
