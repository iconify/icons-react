import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw_r6bbym.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw_r6bbym"/>`,
		"fallback": "fa6-solid:square-arrow-up-right",
	});
}

export default Component;
