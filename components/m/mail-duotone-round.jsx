import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swuzjxkkr.css';
import '../../css/d/dzq3hyb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="swuzjxkkr"/><path class="dzq3hyb0s"/></g>`,
		"fallback": "coolicons:mail-duotone-round",
	});
}

export default Component;
