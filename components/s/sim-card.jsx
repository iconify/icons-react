import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/op4qv5v4p.css';
import '../../css/v/vcn-qc1or.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="op4qv5v4p"/><path class="vcn-qc1or"/></g>`,
		"fallback": "streamline-freehand-color:sim-card",
	});
}

export default Component;
