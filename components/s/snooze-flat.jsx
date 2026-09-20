import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jhkyb6bhd.css';
import '../../css/h/h8cr8n35g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jhkyb6bhd"/><path class="h8cr8n35g"/></g>`,
		"fallback": "streamline-flex-color:snooze-flat",
	});
}

export default Component;
