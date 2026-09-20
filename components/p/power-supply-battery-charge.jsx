import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k5epnxb1j.css';
import '../../css/v/vlyciwz_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k5epnxb1j"/><path class="vlyciwz_z"/></g>`,
		"fallback": "streamline-freehand-color:power-supply-battery-charge",
	});
}

export default Component;
