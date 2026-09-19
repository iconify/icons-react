import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/ml6acebxg.css';
import '../../css/m/muuj6ob0x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ml6acebxg"/><path class="muuj6ob0x"/></g>`,
		"fallback": "at-icons:rotate",
	});
}

export default Component;
