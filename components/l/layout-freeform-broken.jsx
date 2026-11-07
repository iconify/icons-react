import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqn8_gw_r.css';
import '../../css/f/fqu4-ynwx.css';
import '../../css/h/h3hjjdb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aqn8_gw_r"/><path class="fqu4-ynwx"/><path class="h3hjjdb4q"/></g>`,
		"fallback": "solar:layout-freeform-broken",
	});
}

export default Component;
