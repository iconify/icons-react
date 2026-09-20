import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z1ts57b-q.css';
import '../../css/u/upydze7ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z1ts57b-q"/><path class="upydze7ni"/></g>`,
		"fallback": "streamline-freehand:retouch-cut-edit",
	});
}

export default Component;
