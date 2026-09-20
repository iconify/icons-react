import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/f0h0jpb8m.css';
import '../../css/r/r1f-eub4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="f0h0jpb8m"/><path class="r1f-eub4c"/></g>`,
		"fallback": "keyline-icons:paint-roller-sharp-duotone",
	});
}

export default Component;
