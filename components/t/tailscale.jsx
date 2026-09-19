import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls4ud0b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls4ud0b6c"/>`,
		"fallback": "cbi:tailscale",
	});
}

export default Component;
