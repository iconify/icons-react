import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gx10se9aa.css';
import '../../css/z/znetn3_1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gx10se9aa"/><path class="znetn3_1c"/></g>`,
		"fallback": "streamline-freehand-color:saving-bank-cash",
	});
}

export default Component;
