import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tyil9u09l.css';
import '../../css/g/grm18nmbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tyil9u09l"/><path class="grm18nmbc"/></g>`,
		"fallback": "streamline-freehand:shopping-cart-trolley",
	});
}

export default Component;
