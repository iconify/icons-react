import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/shr9ltubw.css';
import '../../css/t/tlhz8hwex.css';
import '../../css/r/rexpb8zmg.css';
import '../../css/e/e7w7dmbjn.css';
import '../../css/b/bfinew11k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="shr9ltubw"/><path class="tlhz8hwex"/><path class="rexpb8zmg"/><path class="e7w7dmbjn"/><path class="bfinew11k"/></g>`,
		"fallback": "streamline-freehand-color:ui-page-scroll",
	});
}

export default Component;
