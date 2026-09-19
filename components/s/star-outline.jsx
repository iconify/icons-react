import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoe8j9jwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoe8j9jwn"/>`,
		"fallback": "flowbite:star-outline",
	});
}

export default Component;
