import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w70lsgs8c.css';
import '../../css/w/wokny8d9v.css';
import '../../css/a/a5wgy1bzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="w70lsgs8c"><path class="wokny8d9v"/><path class="a5wgy1bzs"/></g>`,
		"fallback": "streamline-freehand-color:resize-arrow-retract-horizontal",
	});
}

export default Component;
