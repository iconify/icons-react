import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_vdoy6ny.css';
import '../../css/b/bza-itwkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l_vdoy6ny"/><path class="bza-itwkq"/></g>`,
		"fallback": "andrsrxn:phone-sound",
	});
}

export default Component;
