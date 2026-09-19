import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe9q7uw-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe9q7uw-b"/>`,
		"fallback": "fa6-solid:radiation",
	});
}

export default Component;
