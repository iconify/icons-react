import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_e1c9-on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_e1c9-on"/>`,
		"fallback": "ri:painting-fill",
	});
}

export default Component;
