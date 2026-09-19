import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df-lw4b_h.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df-lw4b_h"/>`,
		"fallback": "fa6-solid:paintbrush",
	});
}

export default Component;
