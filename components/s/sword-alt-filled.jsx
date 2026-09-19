import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp6gv5bfm.css';
import '../../css/q/ql5n44bqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp6gv5bfm"/><path class="ql5n44bqd"/>`,
		"fallback": "boxicons:sword-alt-filled",
	});
}

export default Component;
