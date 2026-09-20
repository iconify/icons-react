import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqdy2-y3t.css';
import '../../css/f/fs7pu5ekr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqdy2-y3t"/><path class="fs7pu5ekr"/>`,
		"fallback": "token:srx",
	});
}

export default Component;
