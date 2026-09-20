import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uei-4db6u.css';
import '../../css/u/u1hfyvlab.css';
import '../../css/w/w32_xebgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uei-4db6u"/><path clip-rule="evenodd" class="u1hfyvlab"/><path class="w32_xebgv"/>`,
		"fallback": "thesvg-color:openhands",
	});
}

export default Component;
