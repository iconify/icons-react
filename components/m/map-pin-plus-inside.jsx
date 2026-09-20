import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbc5s7bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbc5s7bep"/>`,
		"fallback": "mynaui:map-pin-plus-inside",
	});
}

export default Component;
