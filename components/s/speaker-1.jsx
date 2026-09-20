import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/kq7md5beb.css';
import '../../css/o/olwy6xb_j.css';
import '../../css/r/rndpdgbhc.css';
import '../../css/s/slzlyzcjl.css';
import '../../css/w/wvwvpobuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="kq7md5beb"/><path class="olwy6xb_j"/><path class="rndpdgbhc"/><path class="slzlyzcjl"/><path class="wvwvpobuh"/></g>`,
		"fallback": "streamline-sharp-color:speaker-1",
	});
}

export default Component;
