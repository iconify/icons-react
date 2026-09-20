import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu1ihmb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu1ihmb1x"/>`,
		"fallback": "mdi:weather-hazy",
	});
}

export default Component;
