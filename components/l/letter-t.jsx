import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi2285bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi2285bvy"/>`,
		"fallback": "pixelarticons:letter-t",
	});
}

export default Component;
