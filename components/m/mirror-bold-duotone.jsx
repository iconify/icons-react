import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ytwmb0k4c.css';
import '../../css/n/n3271j9uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ytwmb0k4c"/><path class="n3271j9uy"/></g>`,
		"fallback": "solar:mirror-bold-duotone",
	});
}

export default Component;
