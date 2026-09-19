import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcut15byt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcut15byt"/>`,
		"fallback": "fa6-brands:reddit",
	});
}

export default Component;
