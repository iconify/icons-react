import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xxrwddb-l.css';
import '../../css/t/t-d_u8bnm.css';
import '../../css/n/n2ii7nb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xxrwddb-l"/><path class="t-d_u8bnm"/><path class="n2ii7nb-c"/></g>`,
		"fallback": "token:rgt",
	});
}

export default Component;
