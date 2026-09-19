import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cenpm-efw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cenpm-efw"/>`,
		"fallback": "fa-regular:pause-circle",
	});
}

export default Component;
