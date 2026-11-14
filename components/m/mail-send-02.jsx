import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s22kwguip.css';
import '../../css/d/df-j23bjo.css';
import '../../css/a/airf7lg3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s22kwguip"/><path class="df-j23bjo"/><path class="airf7lg3z"/></g>`,
		"fallback": "hugeicons:mail-send-02",
	});
}

export default Component;
