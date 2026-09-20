import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bznxcabtm.css';
import '../../css/n/nwp-27w7c.css';
import '../../css/h/h__ccyqjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bznxcabtm"/><path class="nwp-27w7c"/><path class="h__ccyqjs"/></g>`,
		"fallback": "streamline-freehand-color:shopping-basket-search",
	});
}

export default Component;
