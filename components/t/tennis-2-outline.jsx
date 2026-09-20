import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kdjkjlb8m.css';
import '../../css/y/yssi1mbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kdjkjlb8m"/><path class="yssi1mbla"/></g>`,
		"fallback": "solar:tennis-2-outline",
	});
}

export default Component;
