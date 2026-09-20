import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/h/hh9-_ie0d.css';
import '../../css/h/hc5pfcrmt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="hh9-_ie0d"/><path class="hc5pfcrmt"/></g>`,
		"fallback": "streamline:investment-selection",
	});
}

export default Component;
