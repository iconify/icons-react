import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cso69g_tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cso69g_tf"/>`,
		"fallback": "pixel:plane-departure",
	});
}

export default Component;
