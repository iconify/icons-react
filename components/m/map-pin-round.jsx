import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykrfa-b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykrfa-b6v"/>`,
		"fallback": "coolicons:map-pin-round",
	});
}

export default Component;
