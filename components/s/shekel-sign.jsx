import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly2w5zbky.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly2w5zbky"/>`,
		"fallback": "fa6-solid:shekel-sign",
	});
}

export default Component;
