import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/md1uaibwm.css';
import '../../css/f/fblsodb-h.css';
import '../../css/k/kxcghxbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="md1uaibwm"/><path class="fblsodb-h"/><path class="kxcghxbfn"/></g>`,
		"fallback": "solar:slider-vertical-bold",
	});
}

export default Component;
