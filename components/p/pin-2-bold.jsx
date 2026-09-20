import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz4gg-7av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz4gg-7av"/>`,
		"fallback": "streamline-ultimate:pin-2-bold",
	});
}

export default Component;
