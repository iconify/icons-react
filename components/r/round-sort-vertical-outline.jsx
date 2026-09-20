import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sbgj8s2qu.css';
import '../../css/g/gqqzj6f5v.css';
import '../../css/r/riso4310i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sbgj8s2qu"/><path class="gqqzj6f5v"/><path class="riso4310i"/></g>`,
		"fallback": "solar:round-sort-vertical-outline",
	});
}

export default Component;
