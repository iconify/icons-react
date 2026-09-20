import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp8tl5bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp8tl5bnf"/>`,
		"fallback": "mingcute:left-small-line",
	});
}

export default Component;
