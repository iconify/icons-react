import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qf2y6vzjx.css';
import '../../css/u/u_irrlqwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qf2y6vzjx"/><path class="u_irrlqwz"/></g>`,
		"fallback": "streamline-freehand:party-decoration-banner-1",
	});
}

export default Component;
