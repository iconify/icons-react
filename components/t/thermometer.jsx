import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae0_nebny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae0_nebny"/>`,
		"fallback": "fa6-solid:thermometer",
	});
}

export default Component;
