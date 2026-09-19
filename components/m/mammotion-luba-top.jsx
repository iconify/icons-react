import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szq270g6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szq270g6h"/>`,
		"fallback": "cbi:mammotion-luba-top",
	});
}

export default Component;
