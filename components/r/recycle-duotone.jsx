import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p94z0c4xt.css';
import '../../css/x/xomkjebmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p94z0c4xt"/><path class="xomkjebmr"/></g>`,
		"fallback": "keyline-icons:recycle-duotone",
	});
}

export default Component;
