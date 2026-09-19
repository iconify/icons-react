import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/z6mtt1blg.css';
import '../../css/r/rp64-5bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="z6mtt1blg"/><path class="rp64-5bgq"/></g>`,
		"fallback": "hugeicons:ruler-dimension-line",
	});
}

export default Component;
