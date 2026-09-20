import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqd6-1bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqd6-1bqm"/>`,
		"fallback": "ri:movie-fill",
	});
}

export default Component;
