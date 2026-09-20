import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsb31n2fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsb31n2fw"/>`,
		"fallback": "ri:notification-4-fill",
	});
}

export default Component;
