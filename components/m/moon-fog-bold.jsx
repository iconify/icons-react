import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1psxwbwe.css';
import '../../css/d/de5deccyd.css';
import '../../css/c/cnbhp8aro.css';
import '../../css/h/hdgw87rbq.css';
import '../../css/t/t5yx02b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1psxwbwe"/><path class="de5deccyd"/><path class="cnbhp8aro"/><path class="hdgw87rbq"/><path class="t5yx02b1e"/></g>`,
		"fallback": "solar:moon-fog-bold",
	});
}

export default Component;
