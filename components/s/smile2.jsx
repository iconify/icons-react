import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpps04-hx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpps04-hx"/>`,
		"fallback": "raphael:smile2",
	});
}

export default Component;
