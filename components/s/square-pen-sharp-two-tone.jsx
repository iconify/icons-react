import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lbyq10znk.css';
import '../../css/d/duzo8ynay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lbyq10znk"/><path class="duzo8ynay"/></g>`,
		"fallback": "keyline-icons:square-pen-sharp-two-tone",
	});
}

export default Component;
