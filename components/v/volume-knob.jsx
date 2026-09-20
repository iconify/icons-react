import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rd1vi13ao.css';
import '../../css/c/c7_6g249i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rd1vi13ao"/><path class="c7_6g249i"/></g>`,
		"fallback": "reicon:volume-knob",
	});
}

export default Component;
