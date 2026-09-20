import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bu81pe9pw.css';
import '../../css/m/m70xm5bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bu81pe9pw"/><path class="m70xm5bfa"/></g>`,
		"fallback": "streamline-freehand-color:party-balloon",
	});
}

export default Component;
