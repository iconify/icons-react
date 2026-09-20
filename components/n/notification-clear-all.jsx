import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afad63bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afad63bpm"/>`,
		"fallback": "mdi:notification-clear-all",
	});
}

export default Component;
