import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slcpo8u5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slcpo8u5k"/>`,
		"fallback": "thesvg:stability-stablediffusion",
	});
}

export default Component;
