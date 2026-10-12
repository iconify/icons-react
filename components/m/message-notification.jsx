import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcdgpqbys.css';
import '../../css/y/ytka5ibqh.css';
import '../../css/s/savj5gbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qcdgpqbys"/><path class="ytka5ibqh"/><circle transform="rotate(90 18.76 5.72)" class="savj5gbmt"/></g>`,
		"fallback": "andrsrxn:message-notification",
	});
}

export default Component;
