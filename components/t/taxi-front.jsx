import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xp2exlb-o.css';
import '../../css/g/g5g462wud.css';
import '../../css/k/kbuptu5oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xp2exlb-o"/><path class="g5g462wud"/><path class="kbuptu5oc"/></g>`,
		"fallback": "andrsrxn:taxi-front",
	});
}

export default Component;
