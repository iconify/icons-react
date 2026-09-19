import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4xm4bbzh.css';
import '../../css/i/im3qhl2-p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4xm4bbzh"/><path class="im3qhl2-p"/>`,
		"fallback": "carbon:product",
	});
}

export default Component;
