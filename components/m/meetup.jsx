import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhw393bhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhw393bhe"/>`,
		"fallback": "mdi:meetup",
	});
}

export default Component;
