import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i7-tzbbda.css';
import '../../css/t/t0z8_o3bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i7-tzbbda"/><path class="t0z8_o3bg"/></g>`,
		"fallback": "keyline-icons:list-ordered-sharp-duotone",
	});
}

export default Component;
