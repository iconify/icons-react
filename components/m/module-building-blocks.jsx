import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r82krz71a.css';
import '../../css/a/aci-kwb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r82krz71a"/><path class="aci-kwb_w"/></g>`,
		"fallback": "streamline-freehand-color:module-building-blocks",
	});
}

export default Component;
