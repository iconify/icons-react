import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uho2b5zmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uho2b5zmj"/>`,
		"fallback": "mingcute:vison-pro-line",
	});
}

export default Component;
