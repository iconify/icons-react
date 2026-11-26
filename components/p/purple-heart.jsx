import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/c/cteltd-3l.css';
import '../../css/w/wla7nibhf.css';
import '../../css/d/d1j8upbii.css';
import '../../css/h/hldbrlh-d.css';
import '../../css/w/w2tnaoa4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG1b95Xc5N" cx=".35" cy=".3" r=".8"><stop offset="0" class="vc--wpv5i"/><stop offset=".25" class="cteltd-3l"/><stop offset=".8" class="wla7nibhf"/><stop offset="1" class="d1j8upbii"/></radialGradient></defs><g transform="matrix(4.2 0 0 4.2 256 275.2)"><path fill="url(#SVG1b95Xc5N)" class="hldbrlh-d"/><ellipse transform="rotate(-35 -27 -33)" class="w2tnaoa4j"/></g>`,
		"fallback": "xero-emoji:purple-heart",
	});
}

export default Component;
