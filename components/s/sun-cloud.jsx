import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg7x63d-i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg7x63d-i"/>`,
		"fallback": "streamline:sun-cloud",
	});
}

export default Component;
