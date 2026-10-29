import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n65i2cfkw.css';
import '../../css/c/c9mwe-beg.css';
import '../../css/y/yeh6x5bvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n65i2cfkw"/><path class="c9mwe-beg wm-a"/><path class="wm-s yeh6x5bvv"/></g>`,
		"fallback": "withicons:paint-bucket",
	});
}

export default Component;
