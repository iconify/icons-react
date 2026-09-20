import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swks47vtb.css';
import '../../css/e/ezn-45bua.css';
import '../../css/i/i5bc5ybwi.css';
import '../../css/z/z-aj5hbnh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="swks47vtb"/><path class="ezn-45bua"/><path class="i5bc5ybwi"/><path class="z-aj5hbnh"/></g>`,
		"fallback": "streamline-flex-color:network",
	});
}

export default Component;
