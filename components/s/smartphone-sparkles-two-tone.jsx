import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vqp7mxb_g.css';
import '../../css/z/zp43tbcrc.css';
import '../../css/l/lem7jxbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vqp7mxb_g"/><path class="zp43tbcrc"/><path class="lem7jxbbs"/></g>`,
		"fallback": "keyline-icons:smartphone-sparkles-two-tone",
	});
}

export default Component;
