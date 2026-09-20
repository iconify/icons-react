import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_3psfbjy.css';
import '../../css/v/vtko2zsbn.css';
import '../../css/l/lhmh8-61s.css';
import '../../css/m/mrbd1vqmu.css';
import '../../css/l/l-i-4twyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u_3psfbjy"/><path class="vtko2zsbn"/><path class="lhmh8-61s"/><path class="mrbd1vqmu"/><path class="l-i-4twyo"/></g>`,
		"fallback": "solar:scanner-2-outline",
	});
}

export default Component;
