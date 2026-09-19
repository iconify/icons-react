import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-681ibkf.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-681ibkf"/>`,
		"fallback": "fa6-solid:plane-circle-exclamation",
	});
}

export default Component;
