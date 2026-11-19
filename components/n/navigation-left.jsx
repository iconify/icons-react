import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brnxaebzu.css';
import '../../css/b/b73hic8hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="brnxaebzu"/><path class="b73hic8hl"/></g>`,
		"fallback": "andrsrxn:navigation-left",
	});
}

export default Component;
