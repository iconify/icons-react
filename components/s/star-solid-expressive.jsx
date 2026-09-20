import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yic6p8mfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yic6p8mfm"/>`,
		"fallback": "nrk:star-solid-expressive",
	});
}

export default Component;
