import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k677mt43x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k677mt43x"/>`,
		"fallback": "mdi:toothbrush-paste",
	});
}

export default Component;
