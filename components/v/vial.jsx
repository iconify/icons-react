import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klz-xsb4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klz-xsb4i"/>`,
		"fallback": "fa6-solid:vial",
	});
}

export default Component;
