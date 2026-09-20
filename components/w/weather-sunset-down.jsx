import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1b6-vbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1b6-vbzs"/>`,
		"fallback": "mdi:weather-sunset-down",
	});
}

export default Component;
