import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o6hng-bpv.css';
import '../../css/w/w32_xebgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="o6hng-bpv"/><path class="w32_xebgv"/></g>`,
		"fallback": "thesvg:openhands",
	});
}

export default Component;
