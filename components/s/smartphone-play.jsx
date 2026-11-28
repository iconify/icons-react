import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbgmjniwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbgmjniwn"/>`,
		"fallback": "noviair-light:smartphone-play",
	});
}

export default Component;
