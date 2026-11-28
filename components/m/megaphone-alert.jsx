import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f73t0tbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f73t0tbzp"/>`,
		"fallback": "noviair:megaphone-alert",
	});
}

export default Component;
