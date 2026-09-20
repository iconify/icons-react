import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iibenu4im.css';
import '../../css/p/pqg2vl8in.css';
import '../../css/k/kvd-lrbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iibenu4im"/><path class="pqg2vl8in"/><path class="kvd-lrbxk"/></g>`,
		"fallback": "streamline-freehand:receipt-cash-register-print",
	});
}

export default Component;
