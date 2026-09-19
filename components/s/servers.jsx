import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0gt8jwce.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0gt8jwce"/>`,
		"fallback": "whh:servers",
	});
}

export default Component;
