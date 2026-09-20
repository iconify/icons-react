import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm3777prm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm3777prm"/>`,
		"fallback": "mdi:map-marker-up",
	});
}

export default Component;
