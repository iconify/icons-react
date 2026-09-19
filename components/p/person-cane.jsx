import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp1vynl4m.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp1vynl4m"/>`,
		"fallback": "fa6-solid:person-cane",
	});
}

export default Component;
