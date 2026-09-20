import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r1ib1rpxr.css';
import '../../css/l/l13yerr7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r1ib1rpxr"/><path class="l13yerr7r"/></g>`,
		"fallback": "streamline-freehand:products-shopping-bags",
	});
}

export default Component;
