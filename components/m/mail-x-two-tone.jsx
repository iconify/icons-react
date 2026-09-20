import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vub_5oz5o.css';
import '../../css/p/p_9eu4b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vub_5oz5o"/><path class="p_9eu4b7x"/></g>`,
		"fallback": "keyline-icons:mail-x-two-tone",
	});
}

export default Component;
