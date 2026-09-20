import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j984as6vx.css';
import '../../css/s/ssq6x78mi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j984as6vx"/><path class="ssq6x78mi"/></g>`,
		"fallback": "streamline:network",
	});
}

export default Component;
