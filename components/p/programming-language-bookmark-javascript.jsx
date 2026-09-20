import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zrtbmbbhv.css';
import '../../css/d/d9ibocxay.css';
import '../../css/y/ytiie3blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zrtbmbbhv"/><path class="d9ibocxay"/><path class="ytiie3blb"/></g>`,
		"fallback": "streamline-freehand:programming-language-bookmark-javascript",
	});
}

export default Component;
