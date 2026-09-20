import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omid8gbny.css';
import '../../css/n/nw7qd_-li.css';
import '../../css/b/bvmi69brq.css';
import '../../css/z/z-wqubc_h.css';
import '../../css/f/f70b6ll5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omid8gbny"/><path class="nw7qd_-li"/><linearGradient id="SVG3jsiabhH" x1="113.078" x2="329.023" y1="1692.111" y2="1860.166" gradientTransform="translate(0 -1372.33)" gradientUnits="userSpaceOnUse"><stop offset="0" class="bvmi69brq"/><stop offset="1" class="z-wqubc_h"/></linearGradient><path fill="url(#SVG3jsiabhH)" class="f70b6ll5d"/>`,
		"fallback": "selfhst:unimus",
	});
}

export default Component;
