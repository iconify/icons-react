import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-b60rb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-b60rb1a"/>`,
		"fallback": "mdi:sprinkler-fire",
	});
}

export default Component;
