import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vied1fbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vied1fbps"/>`,
		"fallback": "simple-icons:mailboxdotorg",
	});
}

export default Component;
