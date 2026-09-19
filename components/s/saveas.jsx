import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jjbkisfvx.css';
import '../../css/c/cvjo67o6j.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jjbkisfvx"/><path class="cvjo67o6j"/></g>`,
		"fallback": "fad:saveas",
	});
}

export default Component;
