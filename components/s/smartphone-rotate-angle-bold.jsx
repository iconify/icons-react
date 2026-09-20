import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/ffbzcp8nk.css';
import '../../css/n/nrbazpy6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ffbzcp8nk"/><path class="nrbazpy6a"/></g>`,
		"fallback": "solar:smartphone-rotate-angle-bold",
	});
}

export default Component;
