import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iyilwp6za.css';
import '../../css/o/oukvm1b6n.css';
import '../../css/k/ky30-zbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iyilwp6za"/><path class="oukvm1b6n"/><path class="ky30-zbvn"/></g>`,
		"fallback": "streamline-sharp:two-finger-tap",
	});
}

export default Component;
