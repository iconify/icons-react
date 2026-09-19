import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wms074r1e.css';

const viewBox = {"width":717,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wms074r1e"/>`,
		"fallback": "ls:up",
	});
}

export default Component;
