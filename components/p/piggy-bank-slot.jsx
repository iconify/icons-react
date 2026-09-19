import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw-8qhb8k.css';
import '../../css/a/a78cr7b8e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw-8qhb8k"/><path class="a78cr7b8e"/>`,
		"fallback": "carbon:piggy-bank-slot",
	});
}

export default Component;
