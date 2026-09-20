import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xdduotycq.css';
import '../../css/x/x9gi95-ea.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xdduotycq"/><path class="x9gi95-ea"/></g>`,
		"fallback": "streamline-color:notification-application-2-flat",
	});
}

export default Component;
