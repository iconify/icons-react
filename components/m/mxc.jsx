import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq_w9hbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq_w9hbwx"/>`,
		"fallback": "token:mxc",
	});
}

export default Component;
