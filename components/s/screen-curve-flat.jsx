import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p2qknc8xc.css';
import '../../css/n/nbdgxfbxo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p2qknc8xc"/><path class="nbdgxfbxo"/></g>`,
		"fallback": "streamline-color:screen-curve-flat",
	});
}

export default Component;
