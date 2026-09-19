import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyt_auroj.css';
import '../../css/y/ymie1nvqo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyt_auroj"/><path class="ymie1nvqo"/>`,
		"fallback": "carbon:temperature-feels-like",
	});
}

export default Component;
