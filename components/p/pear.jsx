import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lke-3bb1c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lke-3bb1c"/>`,
		"fallback": "fluent-emoji-high-contrast:pear",
	});
}

export default Component;
