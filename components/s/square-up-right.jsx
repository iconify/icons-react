import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np56-gb_v.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np56-gb_v"/>`,
		"fallback": "fa6-solid:square-up-right",
	});
}

export default Component;
