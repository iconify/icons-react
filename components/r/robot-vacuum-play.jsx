import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xecdkfb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xecdkfb1s"/>`,
		"fallback": "noviair-light:robot-vacuum-play",
	});
}

export default Component;
