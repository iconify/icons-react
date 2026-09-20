import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xxqvtdbzn.css';
import '../../css/z/zi03vzb0s.css';
import '../../css/w/warm4ebve.css';
import '../../css/c/c9-w6-zwy.css';
import '../../css/t/tc5e5wilv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xxqvtdbzn"/><path class="zi03vzb0s"/><path class="warm4ebve"/><path class="c9-w6-zwy"/><path class="tc5e5wilv"/></g>`,
		"fallback": "pepicons-pencil:repeat",
	});
}

export default Component;
