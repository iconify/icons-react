import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awp290b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awp290b7e"/>`,
		"fallback": "mingcute:terminal-fill",
	});
}

export default Component;
