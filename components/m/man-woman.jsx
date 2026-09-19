import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/i-14abc6r.css';
import '../../css/d/d8976ozrs.css';
import '../../css/t/thkb21bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="i-14abc6r"/><path class="d8976ozrs"/><path class="thkb21bpv"/></g>`,
		"fallback": "hugeicons:man-woman",
	});
}

export default Component;
