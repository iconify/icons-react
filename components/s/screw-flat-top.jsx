import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfhn1dbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfhn1dbps"/>`,
		"fallback": "mdi:screw-flat-top",
	});
}

export default Component;
