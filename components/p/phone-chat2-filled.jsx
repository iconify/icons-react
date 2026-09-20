import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/onyno6b9s.css';
import '../../css/d/d0sslvxjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="onyno6b9s"/><path class="d0sslvxjq"/></g>`,
		"fallback": "reicon:phone-chat2-filled",
	});
}

export default Component;
