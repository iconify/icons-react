import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcrfceb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcrfceb5z"/>`,
		"fallback": "mdi:weather-snowy-rainy",
	});
}

export default Component;
