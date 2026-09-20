import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a1uo0ccgs.css';
import '../../css/t/t2ej_0btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="a1uo0ccgs"/><path class="t2ej_0btx"/></g>`,
		"fallback": "keyline-icons:truck-plus-sharp-duotone",
	});
}

export default Component;
