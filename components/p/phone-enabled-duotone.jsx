import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1rx_p1lu.css';
import '../../css/u/uypc25u4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b1rx_p1lu"/><path class="uypc25u4n"/></g>`,
		"fallback": "si:phone-enabled-duotone",
	});
}

export default Component;
