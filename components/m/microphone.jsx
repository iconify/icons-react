import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmv64kb3y.css';
import '../../css/i/i0y_0bc6h.css';
import '../../css/k/kzdoctbde.css';
import '../../css/m/m8r8jhb2o.css';
import '../../css/z/zb05pv2-l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmv64kb3y"/><path class="i0y_0bc6h"/><path class="kzdoctbde"/><path class="m8r8jhb2o"/><path class="zb05pv2-l"/>`,
		"fallback": "openmoji:microphone",
	});
}

export default Component;
