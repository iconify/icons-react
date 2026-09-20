import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4beh0bbu.css';
import '../../css/d/dlijrsn0r.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/s/stui2mbih.css';
import '../../css/x/x8ins2d5q.css';
import '../../css/t/t375wkq3y.css';
import '../../css/e/efrlsnzps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGCrjXHbJG" cx="-116.856" cy="1201.341" r="256" gradientTransform="rotate(237.147 -55.14 692.38)scale(-1.7962 .9947)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="v4beh0bbu"/></radialGradient><path fill="url(#SVGCrjXHbJG)" class="dlijrsn0r"/><linearGradient id="SVGmHcLybeI" x1="300.062" x2="300.062" y1="-259.054" y2="-476.214" gradientTransform="matrix(1.0465 0 0 -1.292 -61.29 -325.808)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="stui2mbih"/></linearGradient><path fill="url(#SVGmHcLybeI)" class="x8ins2d5q"/><path class="t375wkq3y"/><path class="efrlsnzps"/>`,
		"fallback": "selfhst:qemu",
	});
}

export default Component;
