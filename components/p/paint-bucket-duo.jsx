import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h04q6jbwu.css';
import '../../css/m/mxc394bgs.css';
import '../../css/y/yeh6x5bvv.css';
import '../../css/n/n65i2cfkw.css';
import '../../css/c/c9mwe-beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h04q6jbwu"/><path class="mxc394bgs wm-s"/><path class="wm-s yeh6x5bvv"/><path class="n65i2cfkw"/><path class="c9mwe-beg wm-a"/></g>`,
		"fallback": "withicons:paint-bucket-duo",
	});
}

export default Component;
