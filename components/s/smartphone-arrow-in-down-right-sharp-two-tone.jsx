import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/ctkwnzbjp.css';
import '../../css/c/c9ntyqb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ctkwnzbjp"/><path class="c9ntyqb6k"/></g>`,
		"fallback": "keyline-icons:smartphone-arrow-in-down-right-sharp-two-tone",
	});
}

export default Component;
