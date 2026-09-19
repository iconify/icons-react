import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lebas9t0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lebas9t0i"/>`,
		"fallback": "cbi:qnap-rtorrent-pro",
	});
}

export default Component;
