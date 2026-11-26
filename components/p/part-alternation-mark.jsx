import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc7yyg80f.css';
import '../../css/w/wb84icb0c.css';
import '../../css/k/kjnmnob7q.css';
import '../../css/d/dwtzfob_c.css';
import '../../css/n/ng5jwse9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGiQSI9cxC" cx="78" cy="77.9" r="125.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="fc7yyg80f"/><stop offset=".85" class="wb84icb0c"/><stop offset="1" class="wb84icb0c"/></radialGradient></defs><path class="kjnmnob7q"/><path fill="url(#SVGiQSI9cxC)" transform="matrix(2.8 0 0 2.8 -22.514 -22.514)" class="dwtzfob_c"/><path class="ng5jwse9q"/>`,
		"fallback": "xero-emoji:part-alternation-mark",
	});
}

export default Component;
