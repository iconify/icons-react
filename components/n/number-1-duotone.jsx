import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1b90xxfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1b90xxfz primary"/>`,
		"fallback": "iconaut:number-1-duotone",
	});
}

export default Component;
