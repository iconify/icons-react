import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rjb8giegi.css';
import '../../css/d/dwqlvhrms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rjb8giegi"/><path class="dwqlvhrms"/></g>`,
		"fallback": "iconoir:medal-1st",
	});
}

export default Component;
