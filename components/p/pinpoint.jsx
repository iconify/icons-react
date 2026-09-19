import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/ghgx1wv-l.css';
import '../../css/y/yg1n-wwmq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ghgx1wv-l"/><path class="yg1n-wwmq"/></g>`,
		"fallback": "pepicons:pinpoint",
	});
}

export default Component;
