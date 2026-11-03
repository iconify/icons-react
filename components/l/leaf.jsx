import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmyx--wgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmyx--wgh"/>`,
		"fallback": "sidekickicons:leaf",
	});
}

export default Component;
