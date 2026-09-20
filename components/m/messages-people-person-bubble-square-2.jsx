import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dt8o2lbya.css';
import '../../css/f/f1-y_phfi.css';
import '../../css/n/n4vsn25wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dt8o2lbya"/><path class="f1-y_phfi"/><path class="n4vsn25wb"/></g>`,
		"fallback": "streamline-freehand-color:messages-people-person-bubble-square-2",
	});
}

export default Component;
