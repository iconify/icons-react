import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sqk155_9e.css';
import '../../css/t/tbk4y95ae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sqk155_9e"/><path class="tbk4y95ae"/></g>`,
		"fallback": "streamline-plump-color:lens-flat",
	});
}

export default Component;
