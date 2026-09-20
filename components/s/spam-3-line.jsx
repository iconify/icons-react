import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe3u_cbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe3u_cbkh"/>`,
		"fallback": "ri:spam-3-line",
	});
}

export default Component;
