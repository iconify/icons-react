import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fbjr9qbyh.css';
import '../../css/e/eal1dfbmd.css';
import '../../css/w/w6vt9xnjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fbjr9qbyh"/><path class="eal1dfbmd"/><path class="w6vt9xnjt"/></g>`,
		"fallback": "keyline-icons:signal-high-sharp-two-tone",
	});
}

export default Component;
