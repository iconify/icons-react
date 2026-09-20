import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdpw95c_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdpw95c_r"/>`,
		"fallback": "mingcute:safe-alert-fill",
	});
}

export default Component;
