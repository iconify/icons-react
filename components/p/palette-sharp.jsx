import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oxyed4bhd.css';
import '../../css/i/ippy8g9bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="oxyed4bhd"/><path class="ippy8g9bw"/></g>`,
		"fallback": "keyline-icons:palette-sharp",
	});
}

export default Component;
