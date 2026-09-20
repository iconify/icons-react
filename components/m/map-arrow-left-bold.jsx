import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs0c_5blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs0c_5blb"/>`,
		"fallback": "solar:map-arrow-left-bold",
	});
}

export default Component;
