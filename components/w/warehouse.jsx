import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfu81lbgl.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfu81lbgl"/>`,
		"fallback": "fa6-solid:warehouse",
	});
}

export default Component;
