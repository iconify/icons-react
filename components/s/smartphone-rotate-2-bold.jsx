import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wp5ooaczn.css';
import '../../css/x/xjcsx6bzc.css';
import '../../css/z/zd1_n8zte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wp5ooaczn"/><path class="xjcsx6bzc"/><path class="zd1_n8zte"/></g>`,
		"fallback": "solar:smartphone-rotate-2-bold",
	});
}

export default Component;
