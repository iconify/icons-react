import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pcs4mgbgf.css';
import '../../css/p/pmu5mzn-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pcs4mgbgf"/><path class="pmu5mzn-b"/></g>`,
		"fallback": "streamline-freehand-color:lens-shutter-1",
	});
}

export default Component;
