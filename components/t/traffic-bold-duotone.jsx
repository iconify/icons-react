import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/m/mee3cb-6s.css';
import '../../css/m/mi29unbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="mee3cb-6s"/><path class="mi29unbna"/></g>`,
		"fallback": "solar:traffic-bold-duotone",
	});
}

export default Component;
