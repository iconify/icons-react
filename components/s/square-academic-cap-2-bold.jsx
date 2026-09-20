import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/asgo7gbiy.css';
import '../../css/v/vido6rbat.css';
import '../../css/n/nbadl6rrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="asgo7gbiy"/><path class="vido6rbat"/><path class="nbadl6rrm"/></g>`,
		"fallback": "solar:square-academic-cap-2-bold",
	});
}

export default Component;
