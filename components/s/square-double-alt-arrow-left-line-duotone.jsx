import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/b/b7cy1bbwm.css';
import '../../css/f/fa8kidbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lxnzn9nmw"/><path class="b7cy1bbwm"/><path class="fa8kidbzr"/></g>`,
		"fallback": "solar:square-double-alt-arrow-left-line-duotone",
	});
}

export default Component;
