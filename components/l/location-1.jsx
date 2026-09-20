import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwrqc6b6j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwrqc6b6j"/>`,
		"fallback": "subway:location-1",
	});
}

export default Component;
