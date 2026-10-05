import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tnwez3bvr.css';
import '../../css/n/nw5ipucyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="tnwez3bvr"/><path class="nw5ipucyf"/></g>`,
		"fallback": "matita:moon",
	});
}

export default Component;
