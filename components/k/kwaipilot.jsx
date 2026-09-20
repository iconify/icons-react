import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtr80hbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rtr80hbkb"/>`,
		"fallback": "thesvg:kwaipilot",
	});
}

export default Component;
