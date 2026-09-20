import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c76859y7v.css';
import '../../css/q/qp-6bjbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c76859y7v"/><path class="qp-6bjbof"/></g>`,
		"fallback": "streamline-freehand-color:lists-numbers",
	});
}

export default Component;
