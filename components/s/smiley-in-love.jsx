import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tfy5_l_9s.css';
import '../../css/o/oe-1dlbnh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tfy5_l_9s"/><path class="oe-1dlbnh"/></g>`,
		"fallback": "streamline:smiley-in-love",
	});
}

export default Component;
