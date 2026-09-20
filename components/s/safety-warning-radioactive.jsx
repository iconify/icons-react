import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/azkxp1bxc.css';
import '../../css/z/zs1845b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="azkxp1bxc"/><path class="zs1845b8p"/></g>`,
		"fallback": "streamline-freehand:safety-warning-radioactive",
	});
}

export default Component;
