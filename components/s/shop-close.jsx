import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lwmjaevpp.css';
import '../../css/y/y2q7lua0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lwmjaevpp"/><path class="y2q7lua0s"/></g>`,
		"fallback": "streamline-freehand:shop-close",
	});
}

export default Component;
