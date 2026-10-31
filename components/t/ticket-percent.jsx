import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yll_otxbc.css';
import '../../css/z/za9i7bcdl.css';
import '../../css/p/pnfi9pbji.css';
import '../../css/o/otblxlbym.css';
import '../../css/o/oe7errbac.css';
import '../../css/i/impgp2bog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k yll_otxbc"/><path class="wm-k za9i7bcdl"/><path class="pnfi9pbji wm-k"/><path class="otblxlbym wm-shadow"/><path class="oe7errbac wm-shine"/><path class="impgp2bog wm-shine"/></g>`,
		"fallback": "withicons-valentine:ticket-percent",
	});
}

export default Component;
