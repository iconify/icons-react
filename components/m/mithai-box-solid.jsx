import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ozy2z40sq.css';
import '../../css/c/ccupl6byu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ozy2z40sq"/><path class="ccupl6byu wm-a"/></g>`,
		"fallback": "withicons:mithai-box-solid",
	});
}

export default Component;
