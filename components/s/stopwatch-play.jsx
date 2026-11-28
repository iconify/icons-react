import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nphau5bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nphau5bcc"/>`,
		"fallback": "noviair-light:stopwatch-play",
	});
}

export default Component;
