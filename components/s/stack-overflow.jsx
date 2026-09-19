import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pkp2-tbry.css';
import '../../css/a/aay5h3bhg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pkp2-tbry"/><path class="aay5h3bhg"/></g>`,
		"fallback": "bi:stack-overflow",
	});
}

export default Component;
