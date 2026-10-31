import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmy-t0e3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmy-t0e3t"/>`,
		"fallback": "coolicons:power-fill-round",
	});
}

export default Component;
