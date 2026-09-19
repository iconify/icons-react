import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffgls6dgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffgls6dgd"/>`,
		"fallback": "fa6-solid:truck-front",
	});
}

export default Component;
