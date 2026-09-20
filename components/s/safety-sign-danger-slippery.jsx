import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tudx7485y.css';
import '../../css/c/cdebuxbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tudx7485y"/><path class="cdebuxbst"/></g>`,
		"fallback": "streamline-freehand:safety-sign-danger-slippery",
	});
}

export default Component;
