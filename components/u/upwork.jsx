import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxj3tdbao.css';

const viewBox = {"width":641,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxj3tdbao"/>`,
		"fallback": "fa6-brands:upwork",
	});
}

export default Component;
