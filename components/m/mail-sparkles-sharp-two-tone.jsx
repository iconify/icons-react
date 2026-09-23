import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l9wm50sqb.css';
import '../../css/f/flz8mqbuo.css';
import '../../css/v/vura0hvqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l9wm50sqb"/><path class="flz8mqbuo"/><path class="vura0hvqc"/></g>`,
		"fallback": "keyline-icons:mail-sparkles-sharp-two-tone",
	});
}

export default Component;
