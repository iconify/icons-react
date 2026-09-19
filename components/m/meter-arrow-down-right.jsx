import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h9bzm6bqd.css';
import '../../css/d/dlo6mubok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h9bzm6bqd"/><path class="dlo6mubok"/></g>`,
		"fallback": "iconoir:meter-arrow-down-right",
	});
}

export default Component;
