import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bto_4-vps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bto_4-vps"/>`,
		"fallback": "fa-solid:thermometer",
	});
}

export default Component;
