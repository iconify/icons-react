import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi_4cvoay.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi_4cvoay"/>`,
		"fallback": "fluent-emoji-high-contrast:rainbow",
	});
}

export default Component;
