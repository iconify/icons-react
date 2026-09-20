import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ieq6p8xbv.css';
import '../../css/w/wgd1-0b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ieq6p8xbv"/><path class="wgd1-0b-k"/></g>`,
		"fallback": "solar:microphone-large-bold",
	});
}

export default Component;
