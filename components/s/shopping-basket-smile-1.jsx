import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z24is80fz.css';
import '../../css/w/wbv9zob4q.css';
import '../../css/z/zotk41bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z24is80fz"/><path class="wbv9zob4q"/><path class="zotk41bsy"/></g>`,
		"fallback": "streamline-freehand-color:shopping-basket-smile-1",
	});
}

export default Component;
