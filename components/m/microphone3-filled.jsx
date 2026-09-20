import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ovr7l1byu.css';
import '../../css/s/shgyeubhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ovr7l1byu"/><path class="shgyeubhn"/></g>`,
		"fallback": "reicon:microphone3-filled",
	});
}

export default Component;
