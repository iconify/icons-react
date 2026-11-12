import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra7z8eb0k.css';
import '../../css/q/q65y8fbgz.css';
import '../../css/m/mno0o_bwq.css';
import '../../css/b/bmqf4y-5r.css';
import '../../css/g/gf7es3bsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra7z8eb0k"/><path class="q65y8fbgz"/><linearGradient id="SVGeP8PzIZA" x1="-20.4" x2="453.2" y1="80.2" y2="553.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="mno0o_bwq"/><stop offset="1" class="bmqf4y-5r"/></linearGradient><path fill="url(#SVGeP8PzIZA)" class="gf7es3bsv"/>`,
		"fallback": "selfhst:ontime-light",
	});
}

export default Component;
