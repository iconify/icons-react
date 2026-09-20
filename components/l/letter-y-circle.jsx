import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik8url33b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik8url33b"/>`,
		"fallback": "pixelarticons:letter-y-circle",
	});
}

export default Component;
