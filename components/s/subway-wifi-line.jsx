import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmu9ifn_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmu9ifn_l"/>`,
		"fallback": "ri:subway-wifi-line",
	});
}

export default Component;
