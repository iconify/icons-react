import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyt2i_pls.css';
import '../../css/w/wturm2t3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gyt2i_pls"/><path class="wturm2t3g"/></g>`,
		"fallback": "andrsrxn:soup",
	});
}

export default Component;
