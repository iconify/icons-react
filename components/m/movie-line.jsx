import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ied5c4bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ied5c4bsg"/>`,
		"fallback": "si:movie-line",
	});
}

export default Component;
