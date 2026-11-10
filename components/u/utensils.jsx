import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w0c8bs52r.css';
import '../../css/h/hp5qfdcee.css';
import '../../css/a/aq-7hfb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="w0c8bs52r"/><path class="hp5qfdcee"/><path class="aq-7hfb-r"/></g>`,
		"fallback": "matita:utensils",
	});
}

export default Component;
