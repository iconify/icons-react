import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xvj31lbcb.css';
import '../../css/w/w8vmw0bpq.css';
import '../../css/z/z2s916bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xvj31lbcb"/><path class="w8vmw0bpq"/><path class="z2s916bng"/></g>`,
		"fallback": "hugeicons:power-socket-02",
	});
}

export default Component;
