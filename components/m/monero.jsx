import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/galr4-yxj.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="galr4-yxj"/>`,
		"fallback": "fa6-brands:monero",
	});
}

export default Component;
