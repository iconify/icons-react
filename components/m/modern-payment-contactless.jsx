import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/ld_cibdog.css';
import '../../css/y/y2swhbr7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ld_cibdog"/><path class="y2swhbr7o"/></g>`,
		"fallback": "streamline-freehand:modern-payment-contactless",
	});
}

export default Component;
