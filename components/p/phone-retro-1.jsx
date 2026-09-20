import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/to1w_vb_c.css';
import '../../css/n/nnax-acty.css';
import '../../css/p/p4fncyb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="to1w_vb_c"/><path class="nnax-acty"/><path class="p4fncyb8k"/></g>`,
		"fallback": "streamline-freehand-color:phone-retro-1",
	});
}

export default Component;
