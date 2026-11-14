import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j99a2vblc.css';
import '../../css/i/i29d0zbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="j99a2vblc"/><rect class="i29d0zbnl"/></g>`,
		"fallback": "struq:pause",
	});
}

export default Component;
