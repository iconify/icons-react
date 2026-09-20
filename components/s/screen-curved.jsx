import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/co-m62bop.css';
import '../../css/q/qmml9bcel.css';
import '../../css/l/le1tw3baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="co-m62bop"/><path class="qmml9bcel"/><path class="le1tw3baq"/></g>`,
		"fallback": "streamline-freehand-color:screen-curved",
	});
}

export default Component;
