import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/it6092zqr.css';
import '../../css/j/jj86gvbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="it6092zqr"/><path class="jj86gvbyo"/></g>`,
		"fallback": "iconoir:linkedin",
	});
}

export default Component;
