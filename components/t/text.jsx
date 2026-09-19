import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry0x_xbwi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ry0x_xbwi"/>`,
		"fallback": "entypo:text",
	});
}

export default Component;
