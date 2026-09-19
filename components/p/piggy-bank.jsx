import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aobyfqzlx.css';
import '../../css/a/a78cr7b8e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aobyfqzlx"/><path class="a78cr7b8e"/>`,
		"fallback": "carbon:piggy-bank",
	});
}

export default Component;
