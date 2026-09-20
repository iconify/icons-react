import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iuumq_xza.css';
import '../../css/v/vbjcoebvr.css';
import '../../css/q/q3q5_acsu.css';
import '../../css/q/q00c_qbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iuumq_xza"/><path class="vbjcoebvr"/><path class="q3q5_acsu"/><path class="q00c_qbka"/></g>`,
		"fallback": "streamline-freehand-color:wealth-pearl-ring",
	});
}

export default Component;
