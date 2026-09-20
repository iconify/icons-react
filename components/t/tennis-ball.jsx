import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx63-zb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx63-zb5z"/>`,
		"fallback": "mdi:tennis-ball",
	});
}

export default Component;
