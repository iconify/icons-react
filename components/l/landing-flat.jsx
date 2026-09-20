import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjhqen9zb.css';
import '../../css/f/fctvxommq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xjhqen9zb"/><path clip-rule="evenodd" class="fctvxommq"/></g>`,
		"fallback": "streamline-sharp-color:landing-flat",
	});
}

export default Component;
