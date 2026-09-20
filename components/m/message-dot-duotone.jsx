import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yocvtflgk.css';
import '../../css/f/f2kwljbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yocvtflgk"/><path class="f2kwljbwv"/></g>`,
		"fallback": "keyline-icons:message-dot-duotone",
	});
}

export default Component;
