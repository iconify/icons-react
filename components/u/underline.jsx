import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa978s6xy.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-6.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa978s6xy"/>`,
		"fallback": "jam:underline",
	});
}

export default Component;
