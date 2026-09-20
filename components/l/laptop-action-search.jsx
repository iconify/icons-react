import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/urrt0qbsc.css';
import '../../css/c/c9qeozbdv.css';
import '../../css/a/ad3lw7vkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="urrt0qbsc"/><path class="c9qeozbdv"/><path class="ad3lw7vkt"/></g>`,
		"fallback": "streamline-freehand-color:laptop-action-search",
	});
}

export default Component;
