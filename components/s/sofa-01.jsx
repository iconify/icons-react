import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/dkjrxsb7o.css';
import '../../css/u/us5prpb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="dkjrxsb7o"/><path class="us5prpb_p"/></g>`,
		"fallback": "hugeicons:sofa-01",
	});
}

export default Component;
