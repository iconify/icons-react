import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vce15nbkf.css';
import '../../css/n/nxyeq8w_t.css';
import '../../css/r/r4ng58brp.css';
import '../../css/x/x6upp__hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vce15nbkf"/><path class="nxyeq8w_t"/><path class="r4ng58brp"/><path class="x6upp__hb"/></g>`,
		"fallback": "solar:mask-sad-broken",
	});
}

export default Component;
