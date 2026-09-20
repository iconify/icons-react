import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nrhdadc2h.css';
import '../../css/o/ouw2xu_9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nrhdadc2h"/><path class="ouw2xu_9p"/></g>`,
		"fallback": "reicon:tram-filled",
	});
}

export default Component;
