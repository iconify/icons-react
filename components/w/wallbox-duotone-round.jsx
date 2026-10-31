import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh0bitcgg.css';
import '../../css/v/v-4s6wskj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wh0bitcgg"/><path class="v-4s6wskj"/></g>`,
		"fallback": "coolicons:wallbox-duotone-round",
	});
}

export default Component;
