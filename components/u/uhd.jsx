import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcv2l6t1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcv2l6t1d"/>`,
		"fallback": "mdi:uhd",
	});
}

export default Component;
