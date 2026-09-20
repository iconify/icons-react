import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kn0bhdb6n.css';
import '../../css/r/rwi-8nm7s.css';
import '../../css/t/t97869bya.css';
import '../../css/y/yd551hbjq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kn0bhdb6n"/><path clip-rule="evenodd" class="rwi-8nm7s"/><path class="t97869bya"/><path clip-rule="evenodd" class="yd551hbjq"/></g>`,
		"fallback": "streamline-color:mobile-phone-camera-flat",
	});
}

export default Component;
