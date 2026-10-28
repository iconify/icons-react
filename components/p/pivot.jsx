import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jv_uejbfj.css';
import '../../css/q/q_nm47bbq.css';
import '../../css/p/p6vrqmbvo.css';
import '../../css/q/q-5aj45wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jv_uejbfj"/><rect transform="rotate(-90 7.32 7.24)" class="q_nm47bbq"/><path class="p6vrqmbvo"/><path class="q-5aj45wj"/></g>`,
		"fallback": "andrsrxn:pivot",
	});
}

export default Component;
