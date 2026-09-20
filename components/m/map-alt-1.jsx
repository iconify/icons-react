import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tocp86bto.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tocp86bto"/>`,
		"fallback": "ix:map-alt-1",
	});
}

export default Component;
