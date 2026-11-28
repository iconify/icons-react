import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuu8dbcmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuu8dbcmr"/>`,
		"fallback": "noviair:move",
	});
}

export default Component;
