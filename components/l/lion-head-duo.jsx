import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k3qerbcso.css';
import '../../css/w/w9p-5cc-x.css';
import '../../css/a/aozp2s1mk.css';
import '../../css/e/ewbtvpc_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k3qerbcso"/><path class="w9p-5cc-x wm-s"/><path class="aozp2s1mk"/><path class="ewbtvpc_j wm-a"/></g>`,
		"fallback": "withicons:lion-head-duo",
	});
}

export default Component;
