import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2xgv55tg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2xgv55tg"/>`,
		"fallback": "raphael:no",
	});
}

export default Component;
