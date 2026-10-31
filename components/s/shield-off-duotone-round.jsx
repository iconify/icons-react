import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wckbc5bmz.css';
import '../../css/c/c0f-csq0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wckbc5bmz"/><path class="c0f-csq0v"/></g>`,
		"fallback": "coolicons:shield-off-duotone-round",
	});
}

export default Component;
