import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lidt02l6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lidt02l6j"/>`,
		"fallback": "mingcute:map-pin-plus-line",
	});
}

export default Component;
