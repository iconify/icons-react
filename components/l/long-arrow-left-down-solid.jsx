import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/y/y0fegdc4y.css';
import '../../css/t/ttkjq8efd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="y0fegdc4y"/><path class="ttkjq8efd"/></g>`,
		"fallback": "iconoir:long-arrow-left-down-solid",
	});
}

export default Component;
