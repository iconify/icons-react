import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2t190b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2t190b2x"/>`,
		"fallback": "mingcute:vip-4-fill",
	});
}

export default Component;
