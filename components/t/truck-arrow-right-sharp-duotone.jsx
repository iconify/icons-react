import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a1uo0ccgs.css';
import '../../css/w/wjiwefbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="a1uo0ccgs"/><path class="wjiwefbev"/></g>`,
		"fallback": "keyline-icons:truck-arrow-right-sharp-duotone",
	});
}

export default Component;
