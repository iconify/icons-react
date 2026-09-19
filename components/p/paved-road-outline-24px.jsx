import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f0knx6bdj.css';
import '../../css/l/lo1yfabvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f0knx6bdj"/><path class="lo1yfabvg"/></g>`,
		"fallback": "healthicons:paved-road-outline-24px",
	});
}

export default Component;
