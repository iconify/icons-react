import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iioeuibok.css';
import '../../css/s/stl-wtb-o.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/x/xvqf1om-v.css';
import '../../css/s/srij2hbwk.css';
import '../../css/y/y_wc37poe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iioeuibok"/><path class="stl-wtb-o"/><g class="p_3zmsvya"><path class="xvqf1om-v"/><path class="srij2hbwk"/></g><path class="y_wc37poe"/></g>`,
		"fallback": "tdesign:map-information-2",
	});
}

export default Component;
