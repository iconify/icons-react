import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ro1sdrwkc.css';
import '../../css/b/bbo_g2b0u.css';
import '../../css/a/afxk9u7hc.css';
import '../../css/r/rdgy8mlra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ro1sdrwkc"/><path class="bbo_g2b0u"/><path class="afxk9u7hc"/><path class="rdgy8mlra"/></g>`,
		"fallback": "solar:link-broken-minimalistic-line-duotone",
	});
}

export default Component;
