import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hanawjchw.css';
import '../../css/z/z4m1pcwtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hanawjchw"/><path class="z4m1pcwtd"/></g>`,
		"fallback": "reicon:lovely-filled",
	});
}

export default Component;
