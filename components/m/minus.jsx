import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/e/emujz3gsg.css';
import '../../css/z/zc9wxwb-v.css';
import '../../css/n/n8_h0pfxy.css';
import '../../css/d/dfiygn3oe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGHQ3UDcoZ" cx="78.7" cy="93.2" r="121.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="emujz3gsg"/><path fill="url(#SVGHQ3UDcoZ)" transform="matrix(2.9 0 0 2.9 -31.156 -31.156)" class="zc9wxwb-v"/><path class="n8_h0pfxy"/><path class="dfiygn3oe"/>`,
		"fallback": "xero-emoji:minus",
	});
}

export default Component;
