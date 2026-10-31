import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3-1v9pyx.css';
import '../../css/i/iiby6ebor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v3-1v9pyx"/><path class="iiby6ebor"/></g>`,
		"fallback": "coolicons:ungroup-duotone-round",
	});
}

export default Component;
