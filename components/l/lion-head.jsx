import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/aozp2s1mk.css';
import '../../css/e/ewbtvpc_j.css';
import '../../css/w/w9p-5cc-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="aozp2s1mk"/><path class="ewbtvpc_j wm-a"/><path class="w9p-5cc-x wm-s"/></g>`,
		"fallback": "withicons:lion-head",
	});
}

export default Component;
