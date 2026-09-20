import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s--n7r_0v.css';
import '../../css/f/fes63hbvs.css';
import '../../css/n/nczupsdbg.css';
import '../../css/n/n5lgf897j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s--n7r_0v"/><path class="fes63hbvs"/><path class="nczupsdbg"/><path class="n5lgf897j"/></g>`,
		"fallback": "streamline-freehand-color:receipt-cash-register-print",
	});
}

export default Component;
