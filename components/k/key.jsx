import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc2i8buif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc2i8buif"/>`,
		"fallback": "fa6-solid:key",
	});
}

export default Component;
