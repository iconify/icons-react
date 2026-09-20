import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u73ya1bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u73ya1bpn"/>`,
		"fallback": "mingcute:semicircle-dash-line",
	});
}

export default Component;
