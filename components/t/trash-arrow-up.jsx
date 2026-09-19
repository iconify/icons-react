import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv-1gie-f.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv-1gie-f"/>`,
		"fallback": "fa6-solid:trash-arrow-up",
	});
}

export default Component;
