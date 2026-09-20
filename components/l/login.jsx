import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j_jr7bc3p.css';
import '../../css/l/ly10_m1nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j_jr7bc3p"/><path class="ly10_m1nh"/></g>`,
		"fallback": "tabler:login",
	});
}

export default Component;
