import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u7zizkbrr.css';
import '../../css/d/df-j23bjo.css';
import '../../css/j/jkp3rmbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u7zizkbrr"/><path class="df-j23bjo"/><path class="jkp3rmbnz"/></g>`,
		"fallback": "hugeicons:mail-reply-02",
	});
}

export default Component;
