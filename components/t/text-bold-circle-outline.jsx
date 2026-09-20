import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xvhj4jbxe.css';
import '../../css/m/mjowc5bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xvhj4jbxe"/><path class="mjowc5bix"/></g>`,
		"fallback": "solar:text-bold-circle-outline",
	});
}

export default Component;
