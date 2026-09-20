import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv2dprbyh.css';
import '../../css/l/l53bstutc.css';
import '../../css/g/g_b_kc2jc.css';
import '../../css/d/dwng4n9wz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGA3uIndnJ" x1="256" x2="256" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="hv2dprbyh"/><stop offset="1" class="l53bstutc"/></linearGradient><path fill="url(#SVGA3uIndnJ)" class="g_b_kc2jc"/><path fill="url(#SVGA3uIndnJ)" class="dwng4n9wz"/>`,
		"fallback": "selfhst:pswd",
	});
}

export default Component;
