import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w-r1gnbyc.css';
import '../../css/y/yc8tt9baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w-r1gnbyc"/><path class="yc8tt9baw"/></g>`,
		"fallback": "lets-icons:link-alt-light",
	});
}

export default Component;
