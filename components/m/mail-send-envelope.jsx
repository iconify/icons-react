import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rh7upse8n.css';
import '../../css/o/o8db31wah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rh7upse8n"/><path class="o8db31wah"/></g>`,
		"fallback": "streamline-sharp:mail-send-envelope",
	});
}

export default Component;
