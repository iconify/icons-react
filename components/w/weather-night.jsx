import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnp-2vbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnp-2vbos"/>`,
		"fallback": "typcn:weather-night",
	});
}

export default Component;
