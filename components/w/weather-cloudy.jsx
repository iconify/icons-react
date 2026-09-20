import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q798o54jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q798o54jm"/>`,
		"fallback": "typcn:weather-cloudy",
	});
}

export default Component;
