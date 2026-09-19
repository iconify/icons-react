import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox9ez0b9c.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox9ez0b9c"/>`,
		"fallback": "fa6-solid:sun-plant-wilt",
	});
}

export default Component;
