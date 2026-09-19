import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk3r6fysb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yk3r6fysb"/>`,
		"fallback": "basil:navigation-outline",
	});
}

export default Component;
