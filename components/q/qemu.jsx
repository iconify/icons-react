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
		"content": `<radialGradient id="SVG6WduJe2z" cx="-116.856" cy="1201.341" r="256" gradientTransform="matrix(.9744 1.5089 .8356 -.5396 -666.7 1021.66)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="v4beh0bbu"/></radialGradient><path fill="url(#SVG6WduJe2z)" class="dlijrsn0r"/><linearGradient id="SVG2f26kemk" x1="300.062" x2="300.062" y1="-259.054" y2="-476.214" gradientTransform="matrix(1.0465 0 0 -1.292 -61.29 -325.81)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="stui2mbih"/></linearGradient><path fill="url(#SVG2f26kemk)" class="x8ins2d5q"/><path class="t375wkq3y"/><path class="efrlsnzps"/>`,
		"fallback": "selfhst:qemu",
	});
}

export default Component;
