import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hwmiqzr9c.css';
import '../../css/p/p6iqo3jzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hwmiqzr9c"/><path class="p6iqo3jzi"/></g>`,
		"fallback": "iconoir:warning-window",
	});
}

export default Component;
