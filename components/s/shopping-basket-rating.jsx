import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rgxy0pbeo.css';
import '../../css/h/hls8t4ywn.css';
import '../../css/v/vilmiwzmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rgxy0pbeo"/><path class="hls8t4ywn"/><path class="vilmiwzmy"/></g>`,
		"fallback": "streamline-freehand:shopping-basket-rating",
	});
}

export default Component;
