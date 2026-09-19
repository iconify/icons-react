import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2c-q7bxh.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2c-q7bxh"/>`,
		"fallback": "fa6-solid:plug",
	});
}

export default Component;
