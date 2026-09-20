import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tfu6g3bei.css';
import '../../css/w/w_adjkb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tfu6g3bei"/><path class="w_adjkb9b"/></g>`,
		"fallback": "streamline-freehand-color:plugin-hands-puzzle",
	});
}

export default Component;
