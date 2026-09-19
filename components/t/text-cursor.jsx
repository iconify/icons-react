import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk1s0nbvv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk1s0nbvv"/>`,
		"fallback": "f7:text-cursor",
	});
}

export default Component;
