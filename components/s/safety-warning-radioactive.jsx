import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zlbppqb-v.css';
import '../../css/b/bwrmk46ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zlbppqb-v"/><path class="bwrmk46ej"/></g>`,
		"fallback": "streamline-freehand-color:safety-warning-radioactive",
	});
}

export default Component;
