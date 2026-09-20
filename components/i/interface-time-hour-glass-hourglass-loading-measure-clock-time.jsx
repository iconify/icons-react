import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gxyp6-s5t.css';
import '../../css/c/cxhz8eywa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gxyp6-s5t"/><path class="cxhz8eywa"/></g>`,
		"fallback": "streamline:interface-time-hour-glass-hourglass-loading-measure-clock-time",
	});
}

export default Component;
