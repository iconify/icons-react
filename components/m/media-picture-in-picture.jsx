import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu-ic6bvo.css';
import '../../css/u/ujklyuwmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pu-ic6bvo"/><path class="ujklyuwmo"/>`,
		"fallback": "nrk:media-picture-in-picture",
	});
}

export default Component;
