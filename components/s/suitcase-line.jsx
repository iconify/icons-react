import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww3nwmefh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww3nwmefh"/>`,
		"fallback": "majesticons:suitcase-line",
	});
}

export default Component;
