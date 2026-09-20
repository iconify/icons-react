import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wgpadacah.css';
import '../../css/w/wxk8270ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wgpadacah"/><path clip-rule="evenodd" class="wxk8270ve"/></g>`,
		"fallback": "keyline-icons:send-clock-fill",
	});
}

export default Component;
