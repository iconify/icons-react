import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6xl-g2-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l6xl-g2-d"/>`,
		"fallback": "basil:notification-outline",
	});
}

export default Component;
