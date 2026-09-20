import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r-do9_buf.css';
import '../../css/h/hwifnpb2v.css';
import '../../css/h/hlgy2abxo.css';
import '../../css/w/w0k93jy7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r-do9_buf"/><path class="hwifnpb2v"/><path class="hlgy2abxo"/><path class="w0k93jy7q"/></g>`,
		"fallback": "solar:scale-linear",
	});
}

export default Component;
