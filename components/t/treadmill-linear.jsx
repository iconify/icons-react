import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/g/g_wv24gbb.css';
import '../../css/j/j7_95ib_g.css';
import '../../css/l/la_28ccrx.css';
import '../../css/o/oxy-3764i.css';
import '../../css/a/a3b_bsjny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><path class="g_wv24gbb"/><path class="j7_95ib_g"/><path class="la_28ccrx"/><path class="oxy-3764i"/><path class="a3b_bsjny"/></g>`,
		"fallback": "solar:treadmill-linear",
	});
}

export default Component;
