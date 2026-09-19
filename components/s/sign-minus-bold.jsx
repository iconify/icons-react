import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyc5hev-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyc5hev-n"/>`,
		"fallback": "iconamoon:sign-minus-bold",
	});
}

export default Component;
