import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/up1cjv3aj.css';
import '../../css/y/yaa1llllr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="up1cjv3aj"/><path class="yaa1llllr"/></g>`,
		"fallback": "streamline-freehand:network",
	});
}

export default Component;
