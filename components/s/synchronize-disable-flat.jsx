import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hfv96cb8n.css';
import '../../css/p/p499accet.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hfv96cb8n"/><path class="p499accet"/></g>`,
		"fallback": "streamline-color:synchronize-disable-flat",
	});
}

export default Component;
