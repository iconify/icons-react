import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nvpxezbcr.css';
import '../../css/a/a8859ibup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nvpxezbcr"/><path class="a8859ibup"/></g>`,
		"fallback": "hugeicons:mirroring-screen",
	});
}

export default Component;
