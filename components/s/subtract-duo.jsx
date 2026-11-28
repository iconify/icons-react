import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y373xkp0b.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mvh-38bga.css';
import '../../css/b/brsnfwb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary y373xkp0b"/><g class="dt0cm9dhy primary"><path class="mvh-38bga"/><path class="brsnfwb1s"/></g>`,
		"fallback": "iconaut:subtract-duo",
	});
}

export default Component;
