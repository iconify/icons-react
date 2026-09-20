import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r2xbvpx9q.css';
import '../../css/p/p1cw9ib-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r2xbvpx9q"/><path class="p1cw9ib-u"/></g>`,
		"fallback": "streamline-freehand-color:qr-code-scan-1",
	});
}

export default Component;
