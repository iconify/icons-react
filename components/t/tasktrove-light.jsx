import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kckc1iwlf.css';
import '../../css/t/tb9i-5hiz.css';
import '../../css/n/ngr3dgbao.css';
import '../../css/u/u-c8d0j7e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGNt16HbLe" x1="256" x2="256" y1="512" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="kckc1iwlf"/><stop offset="1" class="tb9i-5hiz"/></linearGradient><path fill="url(#SVGNt16HbLe)" class="ngr3dgbao"/><path class="u-c8d0j7e"/>`,
		"fallback": "selfhst:tasktrove-light",
	});
}

export default Component;
