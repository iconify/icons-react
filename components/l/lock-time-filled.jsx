import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuksi0y_p.css';
import '../../css/w/ww5a72t8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuksi0y_p"/><path class="ww5a72t8o"/>`,
		"fallback": "tdesign:lock-time-filled",
	});
}

export default Component;
