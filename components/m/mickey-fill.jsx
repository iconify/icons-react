import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfy1igbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfy1igbox"/>`,
		"fallback": "ri:mickey-fill",
	});
}

export default Component;
