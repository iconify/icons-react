import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1gp6sb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1gp6sb5k"/>`,
		"fallback": "mdi:phone-classic-off",
	});
}

export default Component;
