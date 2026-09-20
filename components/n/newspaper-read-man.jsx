import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xrcrhn6ti.css';
import '../../css/b/bsqvyyzse.css';
import '../../css/r/rkbc6ub9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xrcrhn6ti"/><path class="bsqvyyzse"/><path class="rkbc6ub9o"/></g>`,
		"fallback": "streamline-freehand:newspaper-read-man",
	});
}

export default Component;
