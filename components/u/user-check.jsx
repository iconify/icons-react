import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twame7b2s.css';
import '../../css/k/k7x9w1bhn.css';
import '../../css/h/hq0tgibbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="twame7b2s"/><path class="k7x9w1bhn"/><path clip-rule="evenodd" class="hq0tgibbg"/></g>`,
		"fallback": "reicon:user-check",
	});
}

export default Component;
