import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gpvd0ackb.css';
import '../../css/n/nb-e6ubxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gpvd0ackb"/><path clip-rule="evenodd" class="nb-e6ubxq"/></g>`,
		"fallback": "reicon:remote3-filled",
	});
}

export default Component;
