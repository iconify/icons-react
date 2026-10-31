import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fni4lzbcb.css';
import '../../css/z/z_3d1cc6q.css';
import '../../css/w/wdoc2acjm.css';
import '../../css/f/fhrp8xh8u.css';
import '../../css/b/bjw2suxaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="fni4lzbcb"><path class="wm-shadow z_3d1cc6q"/><path class="wdoc2acjm"/><path class="fhrp8xh8u"/><path class="bjw2suxaa wm-a"/></g>`,
		"fallback": "withicons-brutal:scroll-text",
	});
}

export default Component;
