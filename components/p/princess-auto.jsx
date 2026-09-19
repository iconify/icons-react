import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp0-zh71n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp0-zh71n"/>`,
		"fallback": "cbi:princess-auto",
	});
}

export default Component;
