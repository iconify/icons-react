import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9qz21bzv.css';

const viewBox = {"width":471,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9qz21bzv"/>`,
		"fallback": "websymbol:up-micro",
	});
}

export default Component;
