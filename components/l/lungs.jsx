import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1j-dwbmb.css';
import '../../css/z/zmek_08sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t1j-dwbmb"/><path class="zmek_08sc"/></g>`,
		"fallback": "andrsrxn:lungs",
	});
}

export default Component;
