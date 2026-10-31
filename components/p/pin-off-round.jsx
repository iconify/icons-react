import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayh0pmhui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayh0pmhui"/>`,
		"fallback": "coolicons:pin-off-round",
	});
}

export default Component;
