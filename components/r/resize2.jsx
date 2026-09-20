import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqten3byl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqten3byl"/>`,
		"fallback": "raphael:resize2",
	});
}

export default Component;
