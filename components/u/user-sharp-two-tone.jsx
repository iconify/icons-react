import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i8hq46b4m.css';
import '../../css/j/j4wwmxbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i8hq46b4m"/><path class="j4wwmxbht"/></g>`,
		"fallback": "keyline-icons:user-sharp-two-tone",
	});
}

export default Component;
