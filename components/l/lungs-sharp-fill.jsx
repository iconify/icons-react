import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o7djang6s.css';
import '../../css/c/chpgi7bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="o7djang6s"/><path class="chpgi7bbu"/></g>`,
		"fallback": "keyline-icons:lungs-sharp-fill",
	});
}

export default Component;
