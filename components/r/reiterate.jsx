import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myt71-beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myt71-beq"/>`,
		"fallback": "mdi:reiterate",
	});
}

export default Component;
