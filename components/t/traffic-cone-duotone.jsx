import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mogx3vbjy.css';
import '../../css/d/dvv7-cbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mogx3vbjy"/><path class="dvv7-cbah"/></g>`,
		"fallback": "si:traffic-cone-duotone",
	});
}

export default Component;
