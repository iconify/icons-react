import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqao3fb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqao3fb-u"/>`,
		"fallback": "streamline-freehand-color:read-email-at-symbol",
	});
}

export default Component;
