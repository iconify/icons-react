import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylv12j38f.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylv12j38f"/>`,
		"fallback": "fa6-solid:square-minus",
	});
}

export default Component;
