import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n18348kjt.css';
import '../../css/s/sm2vtmb8d.css';
import '../../css/n/nn7d3bcbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n18348kjt"/><path class="sm2vtmb8d"/><path class="nn7d3bcbf"/></g>`,
		"fallback": "streamline-freehand:money-cash-bill-stack",
	});
}

export default Component;
