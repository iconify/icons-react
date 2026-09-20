import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qeow8ebgr.css';
import '../../css/h/h7sg4ybpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qeow8ebgr"/><path class="h7sg4ybpo"/></g>`,
		"fallback": "streamline-freehand-color:rotate-smartphone",
	});
}

export default Component;
