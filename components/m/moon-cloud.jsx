import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lju75tbjv.css';
import '../../css/f/f5rpebc0l.css';
import '../../css/z/zt0nc9_gk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lju75tbjv"/><path class="f5rpebc0l"/><path class="zt0nc9_gk"/></g>`,
		"fallback": "streamline-color:moon-cloud",
	});
}

export default Component;
