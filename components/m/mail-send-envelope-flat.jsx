import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxqvdebjs.css';
import '../../css/g/g-2ubmb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wxqvdebjs"/><path clip-rule="evenodd" class="g-2ubmb5c"/></g>`,
		"fallback": "streamline-sharp-color:mail-send-envelope-flat",
	});
}

export default Component;
