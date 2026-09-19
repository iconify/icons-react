import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr9efjb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr9efjb9j"/>`,
		"fallback": "cbi:merx-ipc-horizon-dome",
	});
}

export default Component;
