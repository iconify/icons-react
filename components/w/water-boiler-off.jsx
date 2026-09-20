import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghp9c2bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghp9c2bgo"/>`,
		"fallback": "mdi:water-boiler-off",
	});
}

export default Component;
