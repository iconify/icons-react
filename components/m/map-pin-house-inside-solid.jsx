import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rfehzhbea.css';
import '../../css/f/fk9a7bb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rfehzhbea"/><path class="fk9a7bb6o"/></g>`,
		"fallback": "mynaui:map-pin-house-inside-solid",
	});
}

export default Component;
