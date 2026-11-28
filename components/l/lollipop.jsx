import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srq9s31kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srq9s31kt"/>`,
		"fallback": "noviair:lollipop",
	});
}

export default Component;
