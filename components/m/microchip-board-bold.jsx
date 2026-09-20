import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3vmni1om.css';
import '../../css/i/i_h7t1znx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3vmni1om"/><path class="i_h7t1znx"/>`,
		"fallback": "streamline-ultimate:microchip-board-bold",
	});
}

export default Component;
