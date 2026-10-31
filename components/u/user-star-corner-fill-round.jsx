import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnnk2pxpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnnk2pxpm"/>`,
		"fallback": "coolicons:user-star-corner-fill-round",
	});
}

export default Component;
