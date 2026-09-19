import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq32g6yaw.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq32g6yaw"/>`,
		"fallback": "fontisto:meetup",
	});
}

export default Component;
