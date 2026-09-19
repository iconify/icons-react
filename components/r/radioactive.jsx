import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw0pvw1ya.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw0pvw1ya"/>`,
		"fallback": "whh:radioactive",
	});
}

export default Component;
