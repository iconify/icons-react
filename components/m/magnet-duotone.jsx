import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/reyd2qm3d.css';
import '../../css/e/ewvfa2baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="reyd2qm3d"/><path class="ewvfa2baq"/></g>`,
		"fallback": "reicon:magnet-duotone",
	});
}

export default Component;
