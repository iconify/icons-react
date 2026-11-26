import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3z6sac4w.css';
import '../../css/n/nbd2c-b0r.css';
import '../../css/y/ye11vqd8z.css';
import '../../css/b/bm68pcbjd.css';
import '../../css/c/c4otgibxy.css';
import '../../css/d/db90cccdq.css';
import '../../css/x/xpyi_sbnc.css';
import '../../css/l/lz6kbbbsc.css';
import '../../css/l/lr3obybkh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGexiQGduY" cx="81.4" cy="69.9" r="122.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="j3z6sac4w"/><stop offset=".85" class="nbd2c-b0r"/><stop offset="1" class="nbd2c-b0r"/></radialGradient></defs><path class="ye11vqd8z"/><path class="bm68pcbjd"/><path fill="url(#SVGexiQGduY)" transform="matrix(3 0 0 3 -51.669 -38.529)" class="c4otgibxy"/><path fill="url(#SVGexiQGduY)" transform="matrix(3 0 0 3 -51.669 -38.529)" class="db90cccdq"/><path class="xpyi_sbnc"/><path class="lz6kbbbsc"/><path class="lr3obybkh"/>`,
		"fallback": "xero-emoji:spoon",
	});
}

export default Component;
