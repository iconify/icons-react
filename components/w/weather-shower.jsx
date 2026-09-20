import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwb7nl58g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwb7nl58g"/>`,
		"fallback": "typcn:weather-shower",
	});
}

export default Component;
