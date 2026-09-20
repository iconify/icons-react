import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rgcigdc_c.css';
import '../../css/p/p0r1koben.css';
import '../../css/k/ke2-dkbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rgcigdc_c"/><path class="p0r1koben"/><path class="ke2-dkbvo"/></g>`,
		"fallback": "streamline-freehand-color:text-formating-rotate-angle",
	});
}

export default Component;
