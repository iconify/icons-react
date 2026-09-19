import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/od-h0hovn.css';
import '../../css/m/m3t73ecme.css';
import '../../css/s/szc070bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="od-h0hovn"/><path class="m3t73ecme"/><path class="szc070bhh"/></g>`,
		"fallback": "akar-icons:shipping-box-01",
	});
}

export default Component;
