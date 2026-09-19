import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg1j7ehxs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jg1j7ehxs"/>`,
		"fallback": "pepicons:smartphone-notch",
	});
}

export default Component;
