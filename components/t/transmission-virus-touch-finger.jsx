import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvy3c3b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvy3c3b1m"/>`,
		"fallback": "covid:transmission-virus-touch-finger",
	});
}

export default Component;
