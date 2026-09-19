import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ueuh86b0g.css';
import '../../css/r/rm5g52bca.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ueuh86b0g"/><path class="rm5g52bca"/></g>`,
		"fallback": "bi:sort-alpha-up",
	});
}

export default Component;
