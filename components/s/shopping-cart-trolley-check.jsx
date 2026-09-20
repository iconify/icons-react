import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2uru6-hq.css';
import '../../css/k/kqkpkcbdg.css';
import '../../css/f/flj_y0s4b.css';
import '../../css/u/ucsf5iwmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2uru6-hq"/><path clip-rule="evenodd" class="kqkpkcbdg"/><path class="flj_y0s4b"/><path class="ucsf5iwmi"/>`,
		"fallback": "streamline-freehand:shopping-cart-trolley-check",
	});
}

export default Component;
