import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mplr13r3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mplr13r3d"/>`,
		"fallback": "mdi:message-bulleted",
	});
}

export default Component;
