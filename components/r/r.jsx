import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um8s5qwhf.css';
import '../../css/p/p0r0rf-gr.css';
import '../../css/c/cg5gvobvc.css';
import '../../css/z/znv-7ornv.css';
import '../../css/q/q9zchjbmb.css';
import '../../css/n/n2xhsislq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGyGo73cHJ" x1=".741" x2="590.86" y1="3.666" y2="593.79" gradientTransform="matrix(.2169 0 0 .14527 -.16 14.112)" gradientUnits="userSpaceOnUse"><stop offset="0" class="um8s5qwhf"/><stop offset="1" class="p0r0rf-gr"/></linearGradient><linearGradient id="SVGO2JKkbLu" x1="301.03" x2="703.07" y1="151.4" y2="553.44" gradientTransform="matrix(.17572 0 0 .17931 -.16 14.112)" gradientUnits="userSpaceOnUse"><stop offset="0" class="cg5gvobvc"/><stop offset="1" class="znv-7ornv"/></linearGradient></defs><path fill="url(#SVGyGo73cHJ)" class="q9zchjbmb"/><path fill="url(#SVGO2JKkbLu)" class="n2xhsislq"/>`,
		"fallback": "devicon:r",
	});
}

export default Component;
