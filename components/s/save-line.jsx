import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntrxxob7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntrxxob7h"/>`,
		"fallback": "ri:save-line",
	});
}

export default Component;
