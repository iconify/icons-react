import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj04jfnia.css';
import '../../css/i/itvg1po0z.css';
import '../../css/v/vldf6k28c.css';
import '../../css/h/h6evcx0mf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG3BhuQmFS" x1="201.489" x2="1224.465" y1="177.489" y2="-845.444" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="rj04jfnia"/><stop offset="1" class="itvg1po0z"/></linearGradient><path fill="url(#SVG3BhuQmFS)" class="vldf6k28c"/><path class="h6evcx0mf"/>`,
		"fallback": "selfhst:planning-center-church-center",
	});
}

export default Component;
