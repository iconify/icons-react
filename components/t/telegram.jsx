import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujo1e-bph.css';
import '../../css/l/lflolvmwv.css';
import '../../css/i/iycln-b8i.css';
import '../../css/t/t3esu9bda.css';
import '../../css/c/c75b9o_ub.css';
import '../../css/p/p-udrf0du.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGGOYJkbWS" x1="256" x2="256" y1="790" y2="278" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ujo1e-bph"/><stop offset="1" class="lflolvmwv"/></linearGradient><circle fill="url(#SVGGOYJkbWS)" class="iycln-b8i"/><path class="t3esu9bda"/><path class="c75b9o_ub"/><path class="p-udrf0du"/>`,
		"fallback": "selfhst:telegram",
	});
}

export default Component;
