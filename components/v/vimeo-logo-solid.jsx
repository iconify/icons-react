import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs3tun8sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs3tun8sw"/>`,
		"fallback": "streamline-logos:vimeo-logo-solid",
	});
}

export default Component;
