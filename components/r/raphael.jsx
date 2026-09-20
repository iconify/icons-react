import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxu427bvi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxu427bvi"/>`,
		"fallback": "raphael:raphael",
	});
}

export default Component;
