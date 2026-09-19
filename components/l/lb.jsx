import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i-1p3lb_t.css';
import '../../css/k/kl8-xzbpl.css';
import '../../css/w/w6qdnyb5q.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i-1p3lb_t"/><path class="kl8-xzbpl"/><path class="w6qdnyb5q"/></g>`,
		"fallback": "flagpack:lb",
	});
}

export default Component;
