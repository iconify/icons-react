import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r3q1v9_ye.css';
import '../../css/m/ml2e-ebew.css';
import '../../css/e/e_p8zmu7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r3q1v9_ye"/><path class="ml2e-ebew"/><path class="e_p8zmu7q"/></g>`,
		"fallback": "streamline-freehand-color:money-wallet",
	});
}

export default Component;
