import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfgy_73og.css';
import '../../css/h/hcrbqyb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qfgy_73og"/><path class="hcrbqyb8o"/></g>`,
		"fallback": "andrsrxn:playing-diamond",
	});
}

export default Component;
