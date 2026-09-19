import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idwbwtb9h.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idwbwtb9h"/>`,
		"fallback": "fa6-solid:plug-circle-plus",
	});
}

export default Component;
