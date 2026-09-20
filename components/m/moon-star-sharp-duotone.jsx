import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pgud1jbem.css';
import '../../css/l/l0nljwb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pgud1jbem"/><path class="l0nljwb2n"/></g>`,
		"fallback": "keyline-icons:moon-star-sharp-duotone",
	});
}

export default Component;
