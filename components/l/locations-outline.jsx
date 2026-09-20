import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxg82f72d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxg82f72d"/>`,
		"fallback": "mdi:locations-outline",
	});
}

export default Component;
