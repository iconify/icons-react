import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yitp0oe6n.css';
import '../../css/j/j6btvdpuf.css';
import '../../css/f/fh_wodb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yitp0oe6n"/><path class="j6btvdpuf"/><path class="fh_wodb3b"/></g>`,
		"fallback": "token:uft",
	});
}

export default Component;
