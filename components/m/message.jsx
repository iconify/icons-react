import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rb5793z0p.css';
import '../../css/z/z7r1tebxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="rb5793z0p"/><path class="z7r1tebxr"/></g>`,
		"fallback": "lets-icons:message",
	});
}

export default Component;
