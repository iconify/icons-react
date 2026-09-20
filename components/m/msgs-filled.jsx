import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o48bv5m1c.css';
import '../../css/k/kdyei3b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o48bv5m1c"/><path class="kdyei3b9k"/></g>`,
		"fallback": "reicon:msgs-filled",
	});
}

export default Component;
