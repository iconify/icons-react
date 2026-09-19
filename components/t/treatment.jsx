import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/us_42zbgl.css';
import '../../css/m/m3fv-ubzq.css';
import '../../css/w/wxoejbcpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="us_42zbgl"/><path class="m3fv-ubzq"/><path class="wxoejbcpk"/></g>`,
		"fallback": "hugeicons:treatment",
	});
}

export default Component;
