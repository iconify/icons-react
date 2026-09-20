import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wh0mr8hag.css';
import '../../css/v/vkry36f-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wh0mr8hag"/><path class="vkry36f-n"/></g>`,
		"fallback": "tabler:paper-bag-off",
	});
}

export default Component;
