import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a1uo0ccgs.css';
import '../../css/e/ee9r70fme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="a1uo0ccgs"/><path class="ee9r70fme"/></g>`,
		"fallback": "keyline-icons:truck-arrow-left-sharp-duotone",
	});
}

export default Component;
