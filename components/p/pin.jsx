import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t5q0hibal.css';
import '../../css/y/yqkm1j6ut.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t5q0hibal"/><path class="yqkm1j6ut"/></g>`,
		"fallback": "pepicons:pin",
	});
}

export default Component;
