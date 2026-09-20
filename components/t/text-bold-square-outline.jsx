import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xvhj4jbxe.css';
import '../../css/l/ldp9jqb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xvhj4jbxe"/><path class="ldp9jqb2y"/></g>`,
		"fallback": "solar:text-bold-square-outline",
	});
}

export default Component;
