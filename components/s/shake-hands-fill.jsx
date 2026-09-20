import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4awn5bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4awn5bwy"/>`,
		"fallback": "ri:shake-hands-fill",
	});
}

export default Component;
