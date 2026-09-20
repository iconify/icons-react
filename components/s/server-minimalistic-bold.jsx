import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hta7xqm4w.css';
import '../../css/k/k5ql1_bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hta7xqm4w"/><path class="k5ql1_bwm"/></g>`,
		"fallback": "solar:server-minimalistic-bold",
	});
}

export default Component;
