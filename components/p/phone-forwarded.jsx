import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ep245zrsw.css';
import '../../css/i/iax3wm1hh.css';
import '../../css/y/ymsnbooef.css';
import '../../css/m/mnc_-ccse.css';
import '../../css/o/oqrn10y8q.css';
import '../../css/s/spx9y234u.css';
import '../../css/g/gypzbmb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ep245zrsw wm-shadow"/><path class="iax3wm1hh"/><path class="ymsnbooef"/><path class="mnc_-ccse"/><path class="oqrn10y8q"/><path class="spx9y234u"/><path class="gypzbmb2e wm-s"/></g>`,
		"fallback": "withicons-retro:phone-forwarded",
	});
}

export default Component;
