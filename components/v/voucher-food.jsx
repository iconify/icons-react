import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s_d8u7awg.css';
import '../../css/z/z5rv6szjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s_d8u7awg"/><path class="z5rv6szjy"/></g>`,
		"fallback": "griddy-icons:voucher-food",
	});
}

export default Component;
