import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3wkt0bdn.css';
import '../../css/c/cv6dnabfl.css';
import '../../css/n/nn5-jrewn.css';
import '../../css/f/f29idxbbk.css';
import '../../css/t/t77nx-f_u.css';
import '../../css/v/v0b2xcb8k.css';
import '../../css/n/n4mbuit9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGf3T1bePZ" x1="12" x2="12" y1="21" y2="3" gradientUnits="userSpaceOnUse"><stop offset=".05" class="u3wkt0bdn"/><stop offset=".3" class="cv6dnabfl"/><stop offset="1" class="nn5-jrewn"/></linearGradient><linearGradient id="SVGoaA2CiVK" x1="13" x2="13" y1="21" y2="3" gradientUnits="userSpaceOnUse"><stop offset=".05" class="u3wkt0bdn"/><stop offset=".45" class="f29idxbbk"/><stop offset=".823" class="t77nx-f_u"/></linearGradient></defs><path fill="url(#SVGf3T1bePZ)" class="v0b2xcb8k"/><path fill="url(#SVGoaA2CiVK)" class="n4mbuit9w"/>`,
		"fallback": "mingcute:loading-line",
	});
}

export default Component;
