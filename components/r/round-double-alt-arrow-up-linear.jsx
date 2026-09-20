import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/j/j_9f9bbyb.css';
import '../../css/r/rh3f4sbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="j_9f9bbyb"/><path class="rh3f4sbkf"/></g>`,
		"fallback": "solar:round-double-alt-arrow-up-linear",
	});
}

export default Component;
