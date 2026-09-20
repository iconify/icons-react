import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd31iab1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd31iab1p"/>`,
		"fallback": "mdi:valve",
	});
}

export default Component;
