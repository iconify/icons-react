import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qz2ibpbaq.css';
import '../../css/w/wy4wumbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qz2ibpbaq"/><path class="wy4wumbry"/></g>`,
		"fallback": "keyline-icons:moon-sharp-two-tone",
	});
}

export default Component;
