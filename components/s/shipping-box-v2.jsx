import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/od-h0hovn.css';
import '../../css/j/jr3d8_b8j.css';
import '../../css/v/vbbbrhbjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="od-h0hovn"/><path class="jr3d8_b8j"/><path class="vbbbrhbjm"/></g>`,
		"fallback": "akar-icons:shipping-box-v2",
	});
}

export default Component;
