import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9p5ss72x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9p5ss72x"/>`,
		"fallback": "hugeicons:text-selection",
	});
}

export default Component;
