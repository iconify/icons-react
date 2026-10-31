import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-hehbbag.css';
import '../../css/s/shaksbcfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n-hehbbag"/><path class="shaksbcfy"/></g>`,
		"fallback": "coolicons:slider-1-duotone-round",
	});
}

export default Component;
