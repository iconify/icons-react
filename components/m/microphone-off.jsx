import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua71p0bsg.css';
import '../../css/l/lnske1bsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua71p0bsg"/><path class="lnske1bsc"/>`,
		"fallback": "bx:microphone-off",
	});
}

export default Component;
