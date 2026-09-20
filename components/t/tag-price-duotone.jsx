import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gug52399m.css';
import '../../css/j/j7g9iwpmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gug52399m"/><path class="j7g9iwpmt"/></g>`,
		"fallback": "reicon:tag-price-duotone",
	});
}

export default Component;
