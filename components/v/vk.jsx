import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trs3z3bbs.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trs3z3bbs"/>`,
		"fallback": "fa6-brands:vk",
	});
}

export default Component;
