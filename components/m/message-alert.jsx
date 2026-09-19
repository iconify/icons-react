import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qqw8vbcel.css';
import '../../css/g/gjsnwctbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qqw8vbcel"/><path class="gjsnwctbo"/></g>`,
		"fallback": "iconoir:message-alert",
	});
}

export default Component;
