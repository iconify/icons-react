import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m3fv-ubzq.css';
import '../../css/w/wxoejbcpk.css';
import '../../css/a/a731olsan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m3fv-ubzq"/><path class="wxoejbcpk"/><path class="a731olsan"/></g>`,
		"fallback": "hugeicons:medicine-01",
	});
}

export default Component;
