import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wokh6dfzc.css';
import '../../css/v/v0y0vbb1i.css';
import '../../css/d/dn_4wqd1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wokh6dfzc"/><path class="v0y0vbb1i"/><path class="dn_4wqd1d"/></g>`,
		"fallback": "solar:signpost-2-bold-duotone",
	});
}

export default Component;
