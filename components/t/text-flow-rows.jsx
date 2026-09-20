import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5ia4bbks.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5ia4bbks"/>`,
		"fallback": "streamline:text-flow-rows",
	});
}

export default Component;
