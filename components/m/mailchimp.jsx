import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va0w3o0-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va0w3o0-z"/>`,
		"fallback": "simple-icons:mailchimp",
	});
}

export default Component;
