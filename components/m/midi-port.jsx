import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykq_gph3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykq_gph3z"/>`,
		"fallback": "mdi:midi-port",
	});
}

export default Component;
