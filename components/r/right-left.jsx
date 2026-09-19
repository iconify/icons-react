import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu7ledbci.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu7ledbci"/>`,
		"fallback": "fa6-solid:right-left",
	});
}

export default Component;
