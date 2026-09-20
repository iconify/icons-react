import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcaachz1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcaachz1c"/>`,
		"fallback": "thesvg-color:sidekiq",
	});
}

export default Component;
