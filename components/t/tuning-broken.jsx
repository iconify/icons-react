import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xphw2z6aa.css';
import '../../css/l/lstp_mb9e.css';
import '../../css/y/y_ji-fbff.css';
import '../../css/f/fr2dt5b5r.css';
import '../../css/g/gr8_-eb1k.css';
import '../../css/a/add57ftwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xphw2z6aa"/><path class="lstp_mb9e"/><path class="y_ji-fbff"/><path class="fr2dt5b5r"/><path class="gr8_-eb1k"/><path class="add57ftwa"/></g>`,
		"fallback": "solar:tuning-broken",
	});
}

export default Component;
