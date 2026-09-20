import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h52--1z7h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h52--1z7h"/>`,
		"fallback": "ix:solid-state-drive",
	});
}

export default Component;
