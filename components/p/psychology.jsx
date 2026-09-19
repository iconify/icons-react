import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktxbgbbpn.css';
import '../../css/g/g_4d4-bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktxbgbbpn"/><path class="g_4d4-bqs"/>`,
		"fallback": "boxicons:psychology",
	});
}

export default Component;
