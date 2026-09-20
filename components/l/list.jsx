import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj1i9xbuv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj1i9xbuv"/>`,
		"fallback": "oi:list",
	});
}

export default Component;
