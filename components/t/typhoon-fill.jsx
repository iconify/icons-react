import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-xs4108g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-xs4108g"/>`,
		"fallback": "mingcute:typhoon-fill",
	});
}

export default Component;
