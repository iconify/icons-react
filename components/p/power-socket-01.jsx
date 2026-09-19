import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xvj31lbcb.css';
import '../../css/v/v90gbqbox.css';
import '../../css/z/z2s916bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xvj31lbcb"/><circle class="v90gbqbox"/><path class="z2s916bng"/></g>`,
		"fallback": "hugeicons:power-socket-01",
	});
}

export default Component;
