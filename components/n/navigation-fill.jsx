import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r5cehp2dq.css';
import '../../css/s/s74akabez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r5cehp2dq"/><path class="s74akabez"/></g>`,
		"fallback": "keyline-icons:navigation-fill",
	});
}

export default Component;
