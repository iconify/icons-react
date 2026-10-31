import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pfcvzdukj.css';
import '../../css/x/x6ux5_qbx.css';
import '../../css/g/g_fatobrl.css';
import '../../css/t/tontm0bys.css';
import '../../css/k/kyhjrk6uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pfcvzdukj wm-shadow"/><path class="x6ux5_qbx"/><path class="g_fatobrl"/><path class="tontm0bys"/><path class="kyhjrk6uv"/></g>`,
		"fallback": "withicons-retro:shopping-cart-plus",
	});
}

export default Component;
