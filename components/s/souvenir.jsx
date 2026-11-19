import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zehoe_gcu.css';
import '../../css/g/g1mibkuwk.css';
import '../../css/c/cnqvfwedj.css';
import '../../css/i/id79lg_aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="zehoe_gcu"/><path class="g1mibkuwk"/><path class="cnqvfwedj"/><path class="id79lg_aq"/></g>`,
		"fallback": "andrsrxn:souvenir",
	});
}

export default Component;
