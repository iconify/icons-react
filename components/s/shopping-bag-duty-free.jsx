import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hr7efq2ib.css';
import '../../css/v/vnnr5e0je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hr7efq2ib"/><path class="vnnr5e0je"/></g>`,
		"fallback": "streamline-freehand-color:shopping-bag-duty-free",
	});
}

export default Component;
