import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yjhzxv4-e.css';
import '../../css/d/dv_6d2bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yjhzxv4-e"/><path class="dv_6d2bmx"/></g>`,
		"fallback": "streamline-freehand:programming-language-browser-css",
	});
}

export default Component;
