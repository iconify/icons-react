import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-7fx30kx.css';
import '../../css/j/jr6j3fbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-7fx30kx"/><path class="jr6j3fbpn"/></g>`,
		"fallback": "coolicons:more-vertical-duotone-round",
	});
}

export default Component;
