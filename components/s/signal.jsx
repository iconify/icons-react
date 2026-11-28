import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/go3vulb-s.css';
import '../../css/g/gy5vykbhv.css';
import '../../css/z/zmoj875uh.css';
import '../../css/t/t6bi9x8gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="go3vulb-s"/><path class="gy5vykbhv"/><path class="zmoj875uh"/><path class="t6bi9x8gk"/></g>`,
		"fallback": "iconaut:signal",
	});
}

export default Component;
