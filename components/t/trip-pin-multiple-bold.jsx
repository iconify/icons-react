import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw3b_777n.css';
import '../../css/s/s6mui_bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw3b_777n"/><path class="s6mui_bce"/>`,
		"fallback": "streamline-ultimate:trip-pin-multiple-bold",
	});
}

export default Component;
