import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/louzr2q0b.css';
import '../../css/w/wox8e5-la.css';
import '../../css/i/iqev0abij.css';
import '../../css/n/nl8tjs5bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="louzr2q0b"/><path class="wm-a wox8e5-la"/><path class="iqev0abij"/><path class="nl8tjs5bg wm-a"/></g>`,
		"fallback": "withicons:swap-duo",
	});
}

export default Component;
