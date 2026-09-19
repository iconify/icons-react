import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx72epa6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx72epa6l"/>`,
		"fallback": "cbi:magentatv",
	});
}

export default Component;
