import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp2ge7b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp2ge7b-l"/>`,
		"fallback": "mdi:sort-numeric-ascending-variant",
	});
}

export default Component;
