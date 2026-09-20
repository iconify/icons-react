import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qivn4qj0i.css';
import '../../css/b/bfl8_9b4q.css';
import '../../css/b/bs-7kpflq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qivn4qj0i"/><path class="bfl8_9b4q"/><path clip-rule="evenodd" class="bs-7kpflq"/></g>`,
		"fallback": "reicon:station2",
	});
}

export default Component;
