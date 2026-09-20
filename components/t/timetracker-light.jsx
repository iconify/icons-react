import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/s/s0urbhscb.css';
import '../../css/n/n_17febsx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGczNKDxQQ" x1="0" x2="512" y1="0" y2="512" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="s0urbhscb"/></linearGradient><path fill="url(#SVGczNKDxQQ)" class="n_17febsx"/>`,
		"fallback": "selfhst:timetracker-light",
	});
}

export default Component;
