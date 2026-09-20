import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/ca8ed0byn.css';
import '../../css/z/z38g_y1iu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ca8ed0byn"/><path class="z38g_y1iu"/></g>`,
		"fallback": "keyline-icons:stop-sharp-two-tone",
	});
}

export default Component;
