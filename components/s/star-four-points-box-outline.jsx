import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh01bzb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh01bzb7m"/>`,
		"fallback": "mdi:star-four-points-box-outline",
	});
}

export default Component;
