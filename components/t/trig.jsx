import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r6hs_vtvx.css';
import '../../css/w/wwvfhx6jo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="r6hs_vtvx"/><path class="wwvfhx6jo"/></g>`,
		"fallback": "cryptocurrency-color:trig",
	});
}

export default Component;
