import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptrybggky.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptrybggky"/>`,
		"fallback": "fa6-solid:square-phone",
	});
}

export default Component;
