import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py5vapyyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="py5vapyyc"/>`,
		"fallback": "reicon:message-minus-filled",
	});
}

export default Component;
