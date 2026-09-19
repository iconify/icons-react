import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_e_osbro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_e_osbro"/>`,
		"fallback": "fa6-solid:transgender",
	});
}

export default Component;
