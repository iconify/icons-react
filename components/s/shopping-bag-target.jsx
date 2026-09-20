import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nom3uiaev.css';
import '../../css/q/qphn1cb0k.css';
import '../../css/u/u0vpbrtxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nom3uiaev"/><path class="qphn1cb0k"/><path class="u0vpbrtxs"/></g>`,
		"fallback": "streamline-freehand-color:shopping-bag-target",
	});
}

export default Component;
