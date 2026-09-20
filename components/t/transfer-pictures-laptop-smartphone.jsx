import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0e9dbbcg.css';
import '../../css/u/uultwvv7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q0e9dbbcg"/><path class="uultwvv7s"/></g>`,
		"fallback": "streamline-freehand:transfer-pictures-laptop-smartphone",
	});
}

export default Component;
