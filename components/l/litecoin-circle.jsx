import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f5eutvbbl.css';
import '../../css/l/l7y8klfzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f5eutvbbl"/><path class="l7y8klfzg"/></g>`,
		"fallback": "iconoir:litecoin-circle",
	});
}

export default Component;
