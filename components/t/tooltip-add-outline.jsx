import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfg20eb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfg20eb7d"/>`,
		"fallback": "mdi:tooltip-add-outline",
	});
}

export default Component;
