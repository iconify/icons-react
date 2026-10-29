import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yt8-h8bsb.css';
import '../../css/c/cjj81ggta.css';
import '../../css/f/fl9qasb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yt8-h8bsb"/><path class="cjj81ggta wm-a"/><path class="fl9qasb6v wm-a"/></g>`,
		"fallback": "withicons:replace",
	});
}

export default Component;
