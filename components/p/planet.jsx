import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wr82iqbzm.css';
import '../../css/p/pj53ys2gt.css';
import '../../css/w/w08m7tbhl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wr82iqbzm"/><path class="pj53ys2gt"/><path class="w08m7tbhl"/></g>`,
		"fallback": "pepicons-pencil:planet",
	});
}

export default Component;
