import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cet4g5u_w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cet4g5u_w"/>`,
		"fallback": "streamline:milkshake",
	});
}

export default Component;
