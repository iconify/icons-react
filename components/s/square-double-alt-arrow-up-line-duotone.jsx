import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/j/j_9f9bbyb.css';
import '../../css/r/rh3f4sbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lxnzn9nmw"/><path class="j_9f9bbyb"/><path class="rh3f4sbkf"/></g>`,
		"fallback": "solar:square-double-alt-arrow-up-line-duotone",
	});
}

export default Component;
