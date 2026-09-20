import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kvt67ihpg.css';
import '../../css/y/yv4c-x_5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kvt67ihpg"/><path class="yv4c-x_5c"/></g>`,
		"fallback": "keyline-icons:repeat-1-sharp-duotone",
	});
}

export default Component;
