import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ueuh86b0g.css';
import '../../css/n/nvodcs-qr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ueuh86b0g"/><path class="nvodcs-qr"/></g>`,
		"fallback": "bi:sort-alpha-down",
	});
}

export default Component;
