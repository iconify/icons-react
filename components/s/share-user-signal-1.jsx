import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wnsu7kb_e.css';
import '../../css/j/j9x-s9bwq.css';
import '../../css/u/uq5pxe-0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wnsu7kb_e"/><path class="j9x-s9bwq"/><path class="uq5pxe-0s"/></g>`,
		"fallback": "streamline-freehand-color:share-user-signal-1",
	});
}

export default Component;
