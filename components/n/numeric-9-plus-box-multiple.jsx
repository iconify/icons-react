import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_q_12zeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_q_12zeq"/>`,
		"fallback": "mdi:numeric-9-plus-box-multiple",
	});
}

export default Component;
