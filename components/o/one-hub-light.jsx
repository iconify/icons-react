import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/f/f-c80ro0i.css';
import '../../css/l/litwb--2s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGgIkDrc4U" x1="256" x2="256" y1="368.3" y2="143.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="f-c80ro0i"/></linearGradient><path fill="url(#SVGgIkDrc4U)" class="litwb--2s"/>`,
		"fallback": "selfhst:one-hub-light",
	});
}

export default Component;
