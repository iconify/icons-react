import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxn6f5kct.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxn6f5kct"/>`,
		"fallback": "simple-line-icons:present",
	});
}

export default Component;
