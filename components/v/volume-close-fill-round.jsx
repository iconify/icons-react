import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omt5egbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omt5egbor"/>`,
		"fallback": "coolicons:volume-close-fill-round",
	});
}

export default Component;
