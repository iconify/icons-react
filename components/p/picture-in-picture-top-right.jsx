import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qovv2hjaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qovv2hjaw"/>`,
		"fallback": "mdi:picture-in-picture-top-right",
	});
}

export default Component;
