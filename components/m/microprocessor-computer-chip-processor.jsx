import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z4ip54b1p.css';
import '../../css/d/ds2jmhaqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z4ip54b1p"/><path class="ds2jmhaqv"/></g>`,
		"fallback": "streamline-freehand-color:microprocessor-computer-chip-processor",
	});
}

export default Component;
