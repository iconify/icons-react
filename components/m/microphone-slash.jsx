import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofy-cuz9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofy-cuz9o"/>`,
		"fallback": "sidekickicons:microphone-slash",
	});
}

export default Component;
