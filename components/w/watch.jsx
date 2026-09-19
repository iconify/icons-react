import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x68ws0bxr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x68ws0bxr"/>`,
		"fallback": "cil:watch",
	});
}

export default Component;
