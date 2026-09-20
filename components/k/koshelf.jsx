import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkh-97s-y.css';
import '../../css/k/ksqwkortm.css';
import '../../css/n/nltgbdb4r.css';
import '../../css/i/iaj1vsbvt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGx65pceVU" x1="43.505" x2="468.495" y1="43.505" y2="468.495" gradientUnits="userSpaceOnUse"><stop offset="0" class="kkh-97s-y"/><stop offset="1" class="ksqwkortm"/></linearGradient><path fill="url(#SVGx65pceVU)" class="nltgbdb4r"/><path class="iaj1vsbvt"/>`,
		"fallback": "selfhst:koshelf",
	});
}

export default Component;
