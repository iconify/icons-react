import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t0mse5pxq.css';
import '../../css/i/i9ibslbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t0mse5pxq"/><path class="i9ibslbpa"/></g>`,
		"fallback": "streamline-freehand:saving-bank-international",
	});
}

export default Component;
