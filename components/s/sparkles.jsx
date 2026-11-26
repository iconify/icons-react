import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq4w-tbtk.css';
import '../../css/o/o3usiu03n.css';
import '../../css/k/krv9cjb_b.css';
import '../../css/x/xu4s5ebvc.css';
import '../../css/o/o2_0jrwyn.css';
import '../../css/r/rmy29xkrv.css';
import '../../css/e/eiogh9bwx.css';
import '../../css/s/sm60fokmz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGQmI0le3w" cx="89.8" cy="79.2" r="115.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="wq4w-tbtk"/><stop offset=".85" class="o3usiu03n"/><stop offset="1" class="o3usiu03n"/></radialGradient><radialGradient id="SVG0X2Ctd1K" cx="37.6" cy="38" r="48" gradientUnits="userSpaceOnUse"><stop offset="0" class="wq4w-tbtk"/><stop offset=".85" class="o3usiu03n"/><stop offset="1" class="o3usiu03n"/></radialGradient><radialGradient id="SVGGTByVbwL" cx="45.3" cy="150.4" r="38.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="wq4w-tbtk"/><stop offset=".85" class="o3usiu03n"/><stop offset="1" class="o3usiu03n"/></radialGradient></defs><path class="krv9cjb_b"/><path fill="url(#SVGQmI0le3w)" transform="matrix(2.7 0 0 2.7 -5.823 -14.113)" class="xu4s5ebvc"/><path class="o2_0jrwyn"/><path fill="url(#SVG0X2Ctd1K)" transform="matrix(2.7 0 0 2.7 -5.823 -14.113)" class="rmy29xkrv"/><path class="eiogh9bwx"/><path fill="url(#SVGGTByVbwL)" transform="matrix(2.7 0 0 2.7 -5.823 -14.113)" class="sm60fokmz"/>`,
		"fallback": "xero-emoji:sparkles",
	});
}

export default Component;
