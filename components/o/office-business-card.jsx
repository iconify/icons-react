import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sezfl3bth.css';
import '../../css/g/gdt76bcot.css';
import '../../css/r/r4tzj-bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sezfl3bth"/><path class="gdt76bcot"/><path class="r4tzj-bic"/></g>`,
		"fallback": "streamline-freehand-color:office-business-card",
	});
}

export default Component;
