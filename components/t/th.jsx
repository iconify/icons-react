import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp08k5b1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp08k5b1j"/>`,
		"fallback": "fa-solid:th",
	});
}

export default Component;
