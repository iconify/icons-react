import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nawqpp2lo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yl-5e19tl.css';
import '../../css/r/rl9mryfun.css';
import '../../css/f/f2a5cbb2a.css';
import '../../css/c/cu24_jbbf.css';
import '../../css/h/h5d7iog4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nawqpp2lo secondary"/><g class="dt0cm9dhy primary"><path class="yl-5e19tl"/><path class="rl9mryfun"/><path class="f2a5cbb2a"/><path class="cu24_jbbf"/><path class="h5d7iog4b"/></g>`,
		"fallback": "iconaut:scan-sparkle-duo",
	});
}

export default Component;
