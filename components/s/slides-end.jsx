import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jetfz2k-p.css';
import '../../css/k/klt331b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jetfz2k-p"/><path class="klt331b3b"/></g>`,
		"fallback": "andrsrxn:slides-end",
	});
}

export default Component;
