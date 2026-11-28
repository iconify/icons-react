import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb60x0cdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb60x0cdi"/>`,
		"fallback": "noviair-light:tulip-heart",
	});
}

export default Component;
