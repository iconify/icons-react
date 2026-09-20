import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g575ejxjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g575ejxjm"/>`,
		"fallback": "typcn:weather-sunny",
	});
}

export default Component;
