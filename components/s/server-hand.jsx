import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y6dr6obew.css';
import '../../css/v/v7e2neeiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y6dr6obew"/><path class="v7e2neeiy"/></g>`,
		"fallback": "streamline-freehand:server-hand",
	});
}

export default Component;
