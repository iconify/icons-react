import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a1uo0ccgs.css';
import '../../css/l/lhaq7my_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="a1uo0ccgs"/><path class="lhaq7my_i"/></g>`,
		"fallback": "keyline-icons:truck-electric-sharp-duotone",
	});
}

export default Component;
