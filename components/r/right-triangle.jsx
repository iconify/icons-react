import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b6nxm7brm.css';
import '../../css/c/c1f70ibfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b6nxm7brm"/><path class="c1f70ibfx"/></g>`,
		"fallback": "hugeicons:right-triangle",
	});
}

export default Component;
