import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wqy5l4i0r.css';
import '../../css/u/us5prpb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="wqy5l4i0r"/><path class="us5prpb_p"/></g>`,
		"fallback": "hugeicons:sofa-02",
	});
}

export default Component;
