import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_hdscctl.css';
import '../../css/y/ymrm5n6id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o_hdscctl"/><path class="ymrm5n6id"/></g>`,
		"fallback": "gg:timer",
	});
}

export default Component;
