import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/objymir4k.css';
import '../../css/h/hx17eoiya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="objymir4k"/><path class="hx17eoiya"/></g>`,
		"fallback": "reicon:notif-remove2-filled",
	});
}

export default Component;
